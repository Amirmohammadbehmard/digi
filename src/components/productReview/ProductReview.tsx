import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function ProductReview() {
  const productReviewItem = [
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/4b306e441f11ede7302a7f7d78c5aad32513e45f_1732356919.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: "طلای امین زر بلک فرایدی",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/bcf188cee015aa980c8b676b9de3b5d4f49dfd12_1732521721.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " خرید بدون ریسک",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/cdc670f6062048a8fac5dc4ec3f64068b2321424_1732374205.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " شامپوی ژاک آندرل",
    },
    {
      href: "https://images.interactify.live/c6a5e2450aaa495e8f181a00e1431c3a.jpeg",
      text: "مشاوره خرید ابزار خانگی و صنعتی",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/5853e827397649275f56711a3dd4ead543fc132a_1730020282.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " بهترین میکروفون با کیس شارژ",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/79449849c0543eea5b96d4f70b029a22594a5929_1732397020.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " خوشتیپ ورزش کن🤸‍♂️🏋‍♂️",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/76ff4c67560ce33a320df0c301eb486e548ed61f_1731096542.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: "نوشیدنیتو گرم نگه دار",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/49327afeef0202498228bdf6211ed482925602d5_1730384260.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " شارژ با امنیت بالا ⛑️",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/682c10d93d327ebe60a94c6e33a24ec4213f7fe4_1729335186.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " زود،تند،سریع!!!",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/24d518dab3980a29c5e3813583af972b5a3913af_1732400471.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: "Playstation VS Xbox",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/4d6789a8c699dd9b1f3cb381b217a5b5e3986e37_1731147865.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " اين پارس‌خزره؛",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/44122f62739a269ab20d99e0dba352ae22f4e5ee_1729355626.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: "سیروپ یا شربت؟",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/1c62fc7ff938bd684abe1fb0ff0561c956fd5663_1729262548.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " تاخیر صدای خیلی کم تجربه کن👌",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/930dd24a3f21851b1b59332b0f2d1dc79932fb0b_1731684862.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " چوب ماهیگیری شیمانو",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/c7a920e2032f622b517a7bd8ba992eb25dee8dca_1694885116.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " ساعت رومیزی جذاب دیجیتالی",
    },
    {
      href: "https://dkstatics-public.digikala.com/digikala-content-x-post-media/39324a1623508b676254ceffd74eb9a2750b1870_1732383261.jpg?x-oss-process=image/resize,m_fill,h_115,w_115",
      text: " این گوشی شام میخوره!",
    },
  ];
  return (
    <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 lg:mt-8 mt-0">
      <div className="relative w-full mx-auto pt-6">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-ProductReview",
            prevEl: ".swiper-button-prev-ProductReview",
          }}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={"auto"}
          dir="rtl"
        >
          {productReviewItem.map((item, index) => (
            <SwiperSlide key={index} className="w-auto max-w-[100px]">
              <div className="ml-3 lg:ml-0 mr-2 cursor-pointer h-[139px]">
                <div className="bg-[linear-gradient(315deg,#e03d96,#7d4c9e)] rounded-full shrink-0 w-full aspect-square relative flex items-center justify-center">
                  <div className="rounded-full overflow-hidden bg-white aspect-square w-[calc(100%-4px)] flex items-center justify-center">
                    <div className="rounded-full overflow-hidden flex items-center justify-center w-[calc(100%-6px)] h-[calc(100%-6px)] bg-[linear-gradient(315deg,#e03d96,#7d4c9e)]">
                      <img
                        className="w-full object-cover rounded-full text-center"
                        src={item.href}
                        alt={item.text}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2 lg:text-[10.2px] text-[10px] font-semibold text-center text-neutral-800">
                  {item.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev-ProductReview [--swiper-navigation-size:0] !text-[black] absolute top-[45%] right-[15px] !w-[38px] !h-[38px] sm:!flex !hidden items-center justify-center border border-[custom-border-color] rounded-full bg-white !z-[5]">
          <FontAwesomeIcon
            className="!h-full !w-[8px] !font-bold "
            icon={faChevronRight}
          />
        </div>
        <div className="swiper-button-next-ProductReview [--swiper-navigation-size:0] !text-[black] absolute top-[45%] left-[15px] !w-[38px] !h-[38px] sm:!flex !hidden items-center justify-center border border-[custom-border-color] rounded-full bg-white !z-[5]">
          <FontAwesomeIcon
            className="!h-full !w-[8px] !font-bold"
            icon={faChevronLeft}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductReview;
