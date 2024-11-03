// SliderComponent.jsx
import Slider from 'react-slick'; // Import react-slick slider
import 'slick-carousel/slick/slick.css'; // Slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Slick carousel theme
import { Link } from 'react-router-dom';

const SliderComponent = () => {
  // Slider settings for slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable navigation arrows
  };

  return (
    <div className="container mx-auto my-8">
      <Slider {...sliderSettings}>
        {/* Slide 1 */}
        <div className="relative ">
          <img
            src="https://i.ibb.co.com/n0WSqNf/book1.jpg"
            alt="Slide 1"
            className="w-full max-h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to={'/products'} className=" bg-red-500 text-white px-6 py-3 rounded-full text-lg hover:bg-red-600 transition duration-300">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src="https://i.ibb.co.com/3Sr9QK4/book2.jpg"
            alt="Slide 2"
            className="w-full max-h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to={'/products'} className=" bg-red-500 text-white px-6 py-3 rounded-full text-lg hover:bg-red-600 transition duration-300">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src="https://i.ibb.co.com/WzpSpjj/book3.jpg"
            alt="Slide 3"
            className="w-full max-h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to={'/products'} className=" bg-red-500 text-white px-6 py-3 rounded-full text-lg hover:bg-red-600 transition duration-300">
              Shop Now
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
