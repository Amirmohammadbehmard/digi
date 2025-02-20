import "./DesktopContainerAmazingOffers.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DesktopLastProductBox from "../desktopLastProductBox/DesktopLastProductBox";
import DesktopTimeBox from "../desktopTimeBox/DesktopTimeBox";
import DesktopProductBox from "../desktopProductBox/DesktopProductBox";
function DesktopContainerAmazingOffers() {
  const itemProductBox = [
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/65bb447cac66eb38bde140e9f7406a4922045a96_1731417608.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "گوشی موبایل آلکاتل مدل 1069 دو سیم‌ کارت",
      discount: "۵٪",
      afterDiscount: "۸۰۹,۰۰۰",
      befourDiscount: "۸۵۲,۰۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/34a0afd6eb9eacbf51bbe484e4f978ef3e4065a8_1693659067.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: " گوشی موبایل آلکاتل مدل 2057 FA دو سیم‌ کارت",
      discount: "۵٪",
      afterDiscount: "۲,۹۴۹,۰۰۰",
      befourDiscount: "۳,۱۰۰,۰۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/ce5ddf70952bd5ab86acc07d2c326c77b10532f5_1689519351.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: " هدست بلوتوثی اکسیژن مدل E7",
      discount: "۳۹٪",
      afterDiscount: "۴۸۹,۰۰۰",
      befourDiscount: "۷۹۷,۰۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/9d844c5a755c3e816243a3978047f2c273528a3b_1723654639.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: " لپ تاپ 15.3 اینچی اپل مدل MacBook Air MRYV3 2024 LLA-M3-8GB RAM-512GB SSD",
      discount: "۶٪",
      afterDiscount: "۸۶,۶۹۹,۰۰۰",
      befourDiscount: "۹۲,۴۹۹,۰۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/f6b484b320072427fa8d2effa03c5dcfdc0a303e_1719051864.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: " ساعت هوشمند ورنا مدل W45 Max with Airpod به همراه هندزفری بیسیم",
      discount: "۳۹٪",
      afterDiscount: "۷۷۵,۰۰۰",
      befourDiscount: "۱,۶۳۵,۰۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/69365d999cdfa187270a304276fef52bc1373ad3_1708084869.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: " آچار جک جغجغه ای خودرو مدل JMN 138",
      discount: "۱۱٪",
      afterDiscount: "۱۶۹,۰۰۰",
      befourDiscount: "۱۹۰,۰۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/cd1f046ddc660c5f654d0a60a0b9e7bd93bf5620_1733225755.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: " گوشی موبایل ریلمی مدل C61 دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
      discount: "۲٪",
      afterDiscount: "۶,۸۹۹,۰۰۰",
      befourDiscount: "۷,۰۴۹,۰۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/7dc598060f20b8b75439eae4a9ece9197123b77b_1720003799.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "اسپیکر بلوتوثی قابل حمل وریتی مدل V-SP7015BT",
      discount: "۳۶٪",
      afterDiscount: "۳,۶۲۲,۳۰۰",
      befourDiscount: "۵,۷۰۰,۰۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/c5e96b099cebe418a8ab01731850aa64bdfd46fd_1704181745.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "کتاب حافظ نشر خوب",
      discount: "۴۰٪",
      afterDiscount: "۱۶۹,۰۰۰",
      befourDiscount: "۲۸۰,۰۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/c64720f4446aa94b873dab4ae35091bc3f0fcc22_1637680139.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "قرص ویتامین D3-1000 واحدی  بسته 60 عددی",
      discount: "۲۹٪",
      afterDiscount: "۴۵,۰۰۰",
      befourDiscount: "۶۳,۷۰۰",
    },
    {
      imgAddress:
        "https://dkstatics-public.digikala.com/digikala-products/fd001a13901ea3fe572eac4b4bdc563c6f25427b_1730031370.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "لامپ ال ای دی 10 وات بوم لایتینگ مدل 001 پایه E27 بسته 2 عددی",
      discount: "۳۴٪",
      afterDiscount: "۵۲,۹۰۰",
      befourDiscount: "۸۰,۰۰۰",
    },
  ];
  return (
    <div className="container-2xl-w px-4 2xl:px-0 pb-3">
      <div className="block relative flex-col justify-center items-center rounded-2xl overflow-hidden custom-bg w-full h-[294px]">
        <div className="w-full flex flex-nowrap py-5 pr-0 justify-stretch overflow-hidden rounded-lg">
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-offers",
              prevEl: ".swiper-button-prev-offers",
            }}
            slidesOffsetAfter={20}
            modules={[Navigation]}
            className="mySwiper"
            slidesPerView={"auto"}
            spaceBetween={3}
            dir="rtl"
            loop={false}
          >
            <SwiperSlide className="max-w-[162px] w-auto">
              <DesktopTimeBox />
            </SwiperSlide>
            {itemProductBox.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`max-w-[162px] w-auto ${
                  index === 0 ? "rounded-r-md overflow-hidden" : ""
                }`}
              >
                <DesktopProductBox {...item} />
              </SwiperSlide>
            ))}
            <SwiperSlide className="max-w-[162px] w-auto">
              <DesktopLastProductBox />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-prev-offers [--swiper-navigation-size:0] !text-[black] absolute top-[50%] right-[15px] !w-[38px] !h-[38px] lg:!flex !hidden items-center justify-center border border-[custom-border-color] rounded-full bg-white !z-10 ">
            <FontAwesomeIcon
              className="!h-full !w-[8px] !font-bold"
              icon={faChevronRight}
            />
          </div>
          <div className="swiper-button-next-offers [--swiper-navigation-size:0] !text-[black] absolute top-[50%] left-[15px] !w-[38px] !h-[38px] lg:!flex !hidden items-center justify-center border border-[custom-border-color] rounded-full bg-white !z-10 ">
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
export default DesktopContainerAmazingOffers;
