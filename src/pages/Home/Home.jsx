import { Link } from "react-router-dom";
import FavouriteReads from "./FavouriteReads";
import SliderComponent from "./SliderComponent";
import TopSellingVendors from "./TopSellingVendors";
import TrendingNow from "./TrendingNow";



const Home = () => {
  return (
    <>
    <Link to={'/register'}> <button className="btn text-center">Register</button></Link>
      <SliderComponent></SliderComponent>
      <TopSellingVendors></TopSellingVendors>
      <FavouriteReads></FavouriteReads>
      <TrendingNow></TrendingNow>

    </>
  );
};

export default Home;