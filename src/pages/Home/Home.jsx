import FavouriteReads from "./FavouriteReads";
import SliderComponent from "./SliderComponent";
import TopSellingVendors from "./TopSellingVendors";
import TrendingNow from "./TrendingNow";



const Home = () => {
  return (
    <>
      <SliderComponent></SliderComponent>
      <TopSellingVendors></TopSellingVendors>
      <FavouriteReads></FavouriteReads>
      <TrendingNow></TrendingNow>
    </>
  );
};

export default Home;