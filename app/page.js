import Banner from "./components/Banner";
import Category from "./components/Category";
import LatestCollection from "./components/LatestCollection";
import Offer from "./components/Offer";
import Review from "./components/Review";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <LatestCollection></LatestCollection>
      <Offer></Offer>
      <Review></Review>
    </>
  );
}
