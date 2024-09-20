import FavouriteReads from "./FavouriteReads";
import SliderComponent from "./SliderComponent";
import TopSellingVendors from "./TopSellingVendors";
import TrendingNow from "./TrendingNow";



const Home = () => {
  return (
    <div>
      <p className=" my-8 text-center">Home page</p>
      <SliderComponent></SliderComponent>
      <TopSellingVendors></TopSellingVendors>
      <FavouriteReads></FavouriteReads>
      <TrendingNow></TrendingNow>
    </div>
  );
};

export default Home;