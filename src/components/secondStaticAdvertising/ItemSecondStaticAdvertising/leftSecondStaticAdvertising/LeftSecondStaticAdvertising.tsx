import { useState, useEffect } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
function LeftSecondStaticAdvertising() {
  const [visibleItems, setVisibleItems] = useState(6);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 351) {
        setVisibleItems(2);
      } else if (window.innerWidth <= 1068) {
        setVisibleItems(3);
      } else if (window.innerWidth <= 1150) {
        setVisibleItems(4);
      } else if (window.innerWidth <= 1232) {
        setVisibleItems(5);
      } else {
        setVisibleItems(6);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = [
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-products/7b039f1fee501420cab194939b5d7b043c4be8c0_1687169951.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      percentage: "۶۰",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-products/5ee166dc732aae8ab8178128b8ef5ec8b43feb66_1709750189.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      percentage: "۵۰",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-products/4853817.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      percentage: "۵۰",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-products/113558836.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      percentage: "۵۰",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-products/febb818398bc68bfb46de9dc7ae68bb6cbf8dfe0_1602075481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      percentage: "۵۰",
    },
    {
      address:
        "https://dkstatics-public.digikala.com/digikala-products/2f2676e160e5565f2edc1a7a5942419a5619324a_1675159126.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      percentage: "۴۹",
    },
  ];
  return (
    <div className="flex items-center justify-between lg:justify-start mt-4 lg:mt-0 lg:mr-4 z-1 w-full lg:mb-0 mb-2">
      <div className="flex items-center justify-between lg:justify-end flex-nowrap lg:flex-wrap overflow-hidden w-full">
        <div className="flex">
          {data.slice(0, visibleItems).map((item, index) => (
            <Link
              key={index}
              to="/"
              className="relative bg-white rounded-full flex items-center justify-center ml-2 w-[68px] h-[67px]"
            >
              <div className="overflow-hidden rounded-[50%]">
                <div className="w-[58px] h-[58px] leading-none">
                  <img
                    className="w-full h-full object-contain inline-block"
                    src={item.address}
                  />
                </div>
              </div>
              <div className="px-1 text-white rounded-lg flex items-center justify-center w-[34px] h-[20px] bg-[#d32f2f] absolute right-0 bottom-0">
                <span className="text-[11.7px]">{item.percentage}٪</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-white p-3 lg:py-3 lg:px-5 text-button-2 flex items-center justify-center text-[#029a49] rounded-full lg:w-[144px] lg:h-[50px] w-[44px] h-[44px]">
          <div className="hidden lg:inline whitespace-nowrap cursor-pointer text-[12px]">
            بیش از ۱۰۰ کالا
          </div>
          <div className="flex mr-0 lg:mr-2">
            <LuArrowLeft className="w-5 h-5 " />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSecondStaticAdvertising;
