import pic1 from '../assets/images/pic1.jpeg';
import pic2 from '../assets/images/pic2.jpeg';
import pic3 from '../assets/images/pic3.jpeg';

function ImageGallery() {
  return (
    <section className="img-gallery">
      <div className="image-container">
        <img src={pic1} alt="Image 1" />
        <img src={pic2} alt="Image 2" />
        <img src={pic3} alt="Image 3" />
      </div>
    </section>
  );
}

export default ImageGallery;
