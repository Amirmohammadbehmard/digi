import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Grid } from "swiper/modules";
function BuyByCategory() {
  const data = [
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/25804b8cb794b9ff36002f37117c4d84764d0475_1733131384.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "موبایل",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/811055abd27571021d484336b05c3d867993cc4f_1733131393.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "کالای دیجیتال",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/e2ec23cbb06bcf8461eae13e188b1036553da148_1733131406.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "کتاب، لوازم تحریر و هنر",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/92bd44f2cdb518e533c6bb4d52ea68c3d741f4ea_1733131423.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "خانه و آشپزخانه",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/cf66c8ecfdd57549773cc7fd379d7b73cdfebf5a_1733131436.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "لوازم خانگی برقی",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/285792b2a54984c4570ba6bd61d5bfb8beb8f3b6_1733131459.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "مد و پوشاک",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/415b937ea92f8d6881ed0b5bb0f9fd5b536674db_1733131478.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "طلا و نقره",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/554f74e939eba973d2f2d9abcd4cd3f8606642f7_1733131506.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "آرایشی بهداشتی",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/38484bbb412223b1eccb85047c5caf4202e362e1_1733131530.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "تجهیزات پزشکی و سلامت",
    },
    {
      address:
        "//dkstatics-public.digikala.com/digikala-mega-menu/18864f7f01629bf782bc6615e42122761ac5c1fe_1733131540.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "ورزش و سفر",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/202435741cee671580b15b215f208e96d8badf69_1733131548.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "خودرو و موتورسیکلت",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/5cc11e8e1d8e3cdbcfb13dde4f784f8de9544b28_1733131558.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "ابزار آلات و تجهیزات",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/58ab49968071551785ba7b7c0b6fab6e41a135c3_1733131568.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "کارت هدیه و گیفت کارت",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/67742925ecdee66602161472466550cec0d84a6d_1733131580.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "کالای خوراکی و اساسی",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/9617736d06b5bdded22100ae967542e720449c55_1733131617.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "اسباب بازی، کودک و نوزاد",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/337e6da79b6d397c3cd3db35a5af6a77d2eb657e_1733131627.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      name: "محصولات بومی و محلی",
    },
  ];
  return (
    <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0">
      <div className="my-3 lg:mb-[32px] lg:mt-4 text-center">
        <h3 className="font-bold pb-3 text-[16px] lg:text-[20px]">
          خرید بر اساس دسته‌بندی
        </h3>
      </div>
      <Swiper
        slidesPerView={"auto"}
        grid={{
          rows: 3,
        }}
        modules={[Grid]}
        className="!flex justify-center w-full lg:h-[328px] h-[488px]"
        breakpoints={{
          1024: {
            slidesPerView: "auto",
            grid: {
              rows: 2,
            },
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-between max-w-[115px] sm:max-w-[186px] lg:max-w-[179px] xl:max-w-[140px]"
          >
            <div className="flex flex-col items-center justify-center user-select-none lg:p-0 lg:mx-0">
              <div className="flex items-center justify-center">
                <img
                  className="h-full min-h-[90px] inline-block lg:w-[100px] w-[90px]"
                  src={item.address}
                />
              </div>
              <p className="text-[11.5px] text-neutral-900 mt-2 text-center  md:w-[138.9px] w-[100px]">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default BuyByCategory;
