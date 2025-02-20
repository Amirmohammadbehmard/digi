import { IoStarOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
function MostPopularBrands() {
  const data = [
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/6091.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/1800.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/7857.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/5a10ae95eb42fc96906c8062563b28062668d418_1722238640.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/3f0e8a262651232007912c06d7cd69f7d9b4bfa4_1662306119.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/d23e8875d5f7a9735e433f1fd86a1513902efc8b_1604470597.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/482302342bcecdf560aa25e7698c2ef8c62339ea_1602073618.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/2994.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/87dcb454f4d8df28bd2f8fd902f0f27b5fb1fac4_1666761801.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/311.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/1313.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/3972.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/477ab48bb7261595c02cb0f4c504837e464f00d0_1663485028.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/f660c46ffc6d58a19e5c0af9d03c50be9a929571_1627214766.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/905d692d888df0bca5b41c0201f674fa9214a14e_1619363496.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-brands/5619.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
    },
  ];
  return (
    <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 py-1 lg:mt-5 mt-0">
      <div className="w-full py-6 lg:rounded-lg lg:border-[1px] lg:border-[#e0e0e2] lg:h-[223px] h-[178px] ">
        <div className="flex justify-center items-center">
          <div className="flex ml-2">
            <IoStarOutline color="#F9BC00" size={20} />
          </div>
          <p className="lg:text-[20px] text-[17px] text-neutral-900">
            محبوب‌ترین برندها
          </p>
        </div>
        <div className="mt-5 w-full relative">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next-MostPopularBrands",
              prevEl: ".swiper-button-prev-MostPopularBrands",
            }}
            slidesPerView="auto"
            loop={false}
            modules={[Navigation]}
            className="h-42 w-full scrollbar-none"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`!w-auto lg:max-w-[142px] max-w-[103px] ${
                  index !== data.length - 1
                    ? "border-l-2 border-[custom-border-color]"
                    : ""
                }`}
              >
                <div className="px-4 py-1 overflow-hidden flex items-center justify-center lg:min-w-[142px] min-w-[103px] h-[78px] lg:h-[118px]">
                  <img
                    className="inline-block object-contain w-full h-full"
                    src={item.address}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev-MostPopularBrands [--swiper-navigation-size:0] !text-[black] absolute top-[39%] right-[15px] !w-[40px] !h-[40px] lg:!flex !hidden items-center justify-center border border-[custom-border-color] rounded-full bg-white !z-10">
            <FontAwesomeIcon
              className="!h-full !w-[8px] !font-bold"
              icon={faChevronRight}
            />
          </div>
          <div className="swiper-button-next-MostPopularBrands [--swiper-navigation-size:0] !text-[black] absolute top-[39%] left-[15px] !w-[40px] !h-[40px] lg:!flex !hidden items-center justify-center border border-[custom-border-color] rounded-full bg-white !z-10">
            <FontAwesomeIcon
              className="!h-full !w-[8px] !font-bold"
              icon={faChevronLeft}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MostPopularBrands;
