import About from './About';
import ImageGallery from './ImageGallery';
import Accomplishments from './Accomplishments';
import SectionDivider from './SectionDivider';

function Middle() {
  return (
    <div className="middle">
      <About />
      <SectionDivider />
      <ImageGallery />
      <SectionDivider />
      <Accomplishments />
    </div>
  );
}

export default Middle;
