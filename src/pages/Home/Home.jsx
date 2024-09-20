import SliderComponent from "./SliderComponent";
import TopSellingVendors from "./TopSellingVendors";



const Home = () => {
  return (
    <div>
      <p className=" my-8 text-center">Home page</p>
      <SliderComponent></SliderComponent>
      <TopSellingVendors></TopSellingVendors>
    </div>
  );
};

export default Home;