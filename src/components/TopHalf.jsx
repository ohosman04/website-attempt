import { useEffect, useState } from 'react';

const heroName = 'Omar Osman';

function TopHalf() {
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedName(heroName);
      return undefined;
    }

    let characterIndex = 0;
    let timeoutId;

    const typeNextCharacter = () => {
      characterIndex += 1;
      setTypedName(heroName.slice(0, characterIndex));

      if (characterIndex < heroName.length) {
        timeoutId = window.setTimeout(typeNextCharacter, 105);
      }
    };

    timeoutId = window.setTimeout(typeNextCharacter, 250);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="top-half">
      <h1 aria-label={heroName}>
        <span className="top-half__typewriter" aria-hidden="true">
          <span className="top-half__typewriter-reserve">{heroName}</span>
          <span className="top-half__typewriter-line">
            {typedName}
            <span className="top-half__cursor">|</span>
          </span>
        </span>
      </h1>
      <p className="top-half__subtitle">CS Master's Student @ UMass Amherst</p>
      <p className="top-half__description">
        Building Enterprise Systems, AI Infrastructure & High-Impact Software
      </p>
    </div>
  );
}

export default TopHalf;
