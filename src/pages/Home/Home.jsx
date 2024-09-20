import FavouriteReads from "./FavouriteReads";
import SliderComponent from "./SliderComponent";
import TopSellingVendors from "./TopSellingVendors";



const Home = () => {
  return (
    <div>
      <p className=" my-8 text-center">Home page</p>
      <SliderComponent></SliderComponent>
      <TopSellingVendors></TopSellingVendors>
      <FavouriteReads></FavouriteReads>
    </div>
  );
};

export default Home;