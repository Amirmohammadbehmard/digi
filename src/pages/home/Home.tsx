import Advertising from "../../components/advertising/Advertising";
import FixedFooter from "../../components/fixedFooter/FixedFooter";
import ProductReview from "../../components/productReview/ProductReview";
import RecommendedCircles from "../../components/recommendedCircles/RecommendedCircles";
import SecondStaticAdvertising from "../../components/secondStaticAdvertising/SecondStaticAdvertising";
import ThirdStaticAdvertising from "../../components/thirdStaticAdvertising/ThirdStaticAdvertising";
import ContBuyByCategory from "../../components/buyByCategory/BuyByCategory";
import MostPopularBrands from "../../components/mostPopularBrands/MostPopularBrands";
import Readings from "../../components/Readings/Readings";
import AmazingOffers from "../../components/amazingOffers/AmazingOffers";
import FirstFixedFourDigitAdvertising from "../../components/firstFixedFourDigitAdvertising/contFirstFixedFourDigitAdvertising/FirstFixedFourDigitAdvertising";
import Footer from "../../components/footer/Footer";
import FirstStaticAdvertising from "../../components/firstStaticAdvertising/FirstStaticAdvertising";
function Home() {
  const firstData = [
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/6650641fb42ec5b7cd5f7e68df753bf1b0dfdec5_1734537376.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/431552cf269fc4aff126db242830a1436e3c9069_1734853578.jpg?x-oss-process=image/quality,q_95",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/0b59707f7882514475501bbbe4a91fe69a93a8f5_1734854768.jpg?x-oss-process=image/quality,q_95",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/1b5cddcb82d0f1a39e966cfe3fd3c352c15547af_1734788668.jpg?x-oss-process=image/quality,q_95",
    },
  ];

  const secondData = [
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/2c99bf17143e3919a34f4c7c08ee849c5a6e740d_1739373398.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/6f26efe8a5fce7d446a0d7686011a713a3bec7af_1739025471.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/100756fe89ad0951f03fa3ecb4eb55e53a6557b1_1739372716.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/2ab75f720d2d044513ce580c211e906855b829f7_1739373222.jpg?x-oss-process=image/quality,q_95",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center">
      <ProductReview />
      <Advertising />
      <FirstStaticAdvertising />
      <RecommendedCircles />
      <AmazingOffers />
      <FixedFooter />
      <FirstFixedFourDigitAdvertising items={firstData} />
      <SecondStaticAdvertising />
      <FirstFixedFourDigitAdvertising items={secondData} />
      <ContBuyByCategory />
      <ThirdStaticAdvertising />
      <MostPopularBrands />
      <Readings />
      <Footer />
    </div>
  );
}
export default Home;
