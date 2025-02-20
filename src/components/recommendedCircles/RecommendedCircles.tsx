import { HiDotsHorizontal } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
function RecommendedCircles() {
  const RecommendedItem = [
    {
      href: "https://dkstatics-public.digikala.com/digikala-bellatrix/a63a1d38fe8b994b2c39ed661d71be2e08ea0ef8_1732124232.png",
      text: " بیت‌کوین ببر",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-bellatrix/f7fe3e72140237684d41bd31038cfdda18bc44a4_1732104699.png",
      text: "شکارگنج",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-bellatrix/f7fe3e72140237684d41bd31038cfdda18bc44a4_1732104699.png",
      text: "بهترین قیمت",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-bellatrix/bbb63e2c82ee0ddb642969c44ef99badece6894d_1732124789.png",
      text: "دریافت وام",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-bellatrix/c999ba24a3b5649d34d828ebfaa661a11dee282f_1732178400.png",
      text: "خرید آنلاین طلا",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-bellatrix/f97bb849442b5cfa1dd8daeb5708900bfe719e7e_1732132410.png",
      text: "تخفیف الکترونیک",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-bellatrix/a5328a71a8a6c875a1e8b7a2195d0e76ddb1f540_1732789943.png",
      text: "تخفیف فرهنگ‌و‌هنر",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-bellatrix/d5523498fbfa75d6f5ab2e8fe9f5887c140329c2_1731945089.png",
      text: "لیست بلک‌فرایدی",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-bellatrix/ad71870b0b05cfac1cf4f4b951ac76230bd638e4_1709020100.png",
      text: "دیجی‌کالا بیزینس",
    },
    {
      href: <HiDotsHorizontal size={25} />,
      text: "بیشتر",
    },
  ];

  return (
    <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 md:my-1 my-0 lg:pb-5 pb-2 lg:pt-0 pt-3">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 5,
          },
          480: {
            slidesPerView: 7,
          },
          640: {
            slidesPerView: 8,
          },
          768: {
            slidesPerView: 9,
          },
          1092: {
            slidesPerView: 10,
          },
        }}
        className="flex gap-[10px]"
      >
        {RecommendedItem.map((item, index) => (
          <SwiperSlide key={index}>
            <Link
              to="/"
              className="flex flex-col items-center my-2 lg:my-0 lg:w-35 w-1/8"
            >
              <div className="w-[52px] h-[52px] flex justify-center items-center leading-none">
                {typeof item.href === "string" ? (
                  <img
                    src={item.href}
                    alt="image"
                    className="w-full inline-block text-center"
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center rounded-full bg-gray-200 text-gray-400">
                    {item.href}
                  </div>
                )}
              </div>
              <span className="text-[12px] text-neutral-700 mt-1 text-center px-3 lg:px-4">
                {item.text}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default RecommendedCircles;
