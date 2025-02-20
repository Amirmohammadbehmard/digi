import "./Advertising.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function Advertising() {
  const advertisingItem = [
    {
      href: "https://dkstatics-public.digikala.com/digikala-adservice-banners/9816a352b7f346c276977261e044fdb3cd0c5c02_1736153099.jpg?x-oss-process=image/quality,q_95",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-adservice-banners/a95d06ee040d9f36f654bb533857dae4a872f406_1736071750.jpg?x-oss-process=image/quality,q_95",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-adservice-banners/79d9156ca697c85ef40c7e771a5461ffd237da0e_1736085669.jpg?x-oss-process=image/quality,q_95",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-adservice-banners/ce4b36b324c533239b61956b9b83b3a70d483d7e_1732720629.gif?x-oss-process=image",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-adservice-banners/e2d2593a48e4e1d4aafc59647e4d667950292fbc_1735719306.jpg?x-oss-process=image/quality,q_95",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-full overflow-hidden relative">
      <Swiper
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-prev-Advertising",
          prevEl: ".swiper-button-next-Advertising",
        }}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mx-2 mb-4 mt-2 2xl:h-[400px] lg:h-[300px] h-[180px] w-full max-w-[1920px]"
        slidesPerView={1}
        dir="rtl"
        loop={true}
        breakpoints={{ 1024: { spaceBetween: 0 } }}
      >
        {advertisingItem.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-[22px] lg:rounded-none">
              <img
                className="w-full h-full object-cover rounded-none"
                src={item.href}
                alt="advertising"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next-Advertising [--swiper-navigation-size:0] !text-[black] absolute top-[75%] right-[40px] !w-[38px] !h-[38px] lg:!flex !hidden items-center justify-center border border-[custom-border-color] rounded-full bg-white !z-10">
        <FontAwesomeIcon
          className="!h-full !w-[8px] !font-bold"
          icon={faChevronRight}
        />
      </div>
      <div className="swiper-button-prev-Advertising [--swiper-navigation-size:0] !text-[black] absolute top-[75%] right-[85px] !w-[38px] !h-[38px] lg:!flex !hidden items-center justify-center border border-[custom-border-color] rounded-full bg-white !z-10">
        <FontAwesomeIcon
          className="!h-full !w-[8px] !font-bold"
          icon={faChevronLeft}
        />
      </div>
    </div>
  );
}
export default Advertising;
