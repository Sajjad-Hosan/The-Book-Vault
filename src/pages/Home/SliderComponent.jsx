// SliderComponent.jsx
import Slider from "react-slick"; // Import react-slick slider
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme
import { FaCartShopping } from "react-icons/fa6";

const SliderCard = ({ data }) => {
  return (
    <>
      <div className="w-full max-h-96 relative card overflow-hidden pl-3">
        <img
          src="/src/assets/book3.jpg"
          alt="Slide 3"
          className="object-cover rounded-lg"
        />
        <div className="absolute bottom-0 left-4 text-left bg-transparent bg-opacity-30 w-full p-2 overflow-hidden">
          <h1 className="text-lg font-semibold text-black mt-2">Book Name</h1>
          <div className="mt-4">
            <button className="btn btn-sm btn-ghost text-black">
              <FaCartShopping className="text-lg" /> Shop
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const SliderComponent = () => {
  // Slider settings for slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mx-auto my-8">
      <Slider {...sliderSettings}>
        {[1, 2].map((i) => (
          <SliderCard key={i} data={i} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
