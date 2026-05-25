import { useCallback, useEffect, useState } from 'react';

const galleryModules = import.meta.glob('../../images/gallery*.{jpeg,jpg}', {
  eager: true,
  import: 'default',
});

const galleryImages = Object.entries(galleryModules)
  .sort(([pathA], [pathB]) => {
    const num = (path) => parseInt(path.match(/gallery(\d+)/)[1], 10);
    return num(pathA) - num(pathB);
  })
  .map(([, src]) => src);

function getVisibleCount(width) {
  if (width >= 1100) return 3;
  if (width >= 600) return 2;
  return 1;
}

function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(() =>
    getVisibleCount(typeof window !== 'undefined' ? window.innerWidth : 1100)
  );

  useEffect(() => {
    const onResize = () => {
      const count = getVisibleCount(window.innerWidth);
      setVisibleCount(count);
      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(0, galleryImages.length - count))
      );
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const maxStartIndex = galleryImages.length - visibleCount;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxStartIndex ? 0 : prev + visibleCount));
  }, [maxStartIndex, visibleCount]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxStartIndex : prev - visibleCount
    );
  }, [maxStartIndex, visibleCount]);

  const visibleImages = galleryImages.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section id="gallery" className="img-gallery">
      <div className="gallery-carousel">
        <button
          type="button"
          className="gallery-carousel__arrow gallery-carousel__arrow--prev"
          onClick={goPrev}
          aria-label="Previous images"
        >
          ‹
        </button>

        <div className="gallery-carousel__viewport">
          <ul
            className="gallery-carousel__track"
            style={{ '--visible-count': visibleCount }}
          >
            {visibleImages.map((src, i) => (
              <li key={`${currentIndex}-${i}`} className="gallery-carousel__slide">
                <img
                  src={src}
                  alt={`Gallery photo ${currentIndex + i + 1}`}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="gallery-carousel__arrow gallery-carousel__arrow--next"
          onClick={goNext}
          aria-label="Next images"
        >
          ›
        </button>
      </div>

      <p className="gallery-carousel__counter" aria-live="polite">
        {currentIndex + 1}–{Math.min(currentIndex + visibleCount, galleryImages.length)} of{' '}
        {galleryImages.length}
      </p>
    </section>
  );
}

export default ImageGallery;
