import { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { FaAngleLeft } from "react-icons/fa";
function HeaderMobileBot() {
  const [isFixed, setIsFixed] = useState(false);
  const footerNavRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const offset = document.documentElement.scrollTop;
      if (offset >= 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isFixed && <div className="h-[104.8px]"></div>}
      <div
        ref={footerNavRef}
        className={`w-full bg-white ${
          isFixed ? "fixed top-0 z-20 " : "relative"
        } border-b-[1px] border-b-[#d8d8d8] `}
      >
        <div className="lg:py-2 flex-col">
          <div className="py-4 w-full px-4">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center h-10 bg-neutral-100 rounded-3xl px-3 w-full">
                <IoSearch className="w-6 h-6 text-[#A1A3A8] mt-[1px]" />
                <span className="flex items-center grow px-2 lg:px-4 text-neutral-500 gap-1">
                  <span className="xs:text-[14px] text-[12px]  opacity-70">
                    جستجو در
                  </span>
                  <img
                    className="w-[61px] h-[16px]"
                    src="https://www.digikala.com/brand/typography.svg"
                    alt="دیجی‌کالا"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="pb-3 z-10">
            <div className="w-full bg-white px-4">
              <div className="flex justify-between items-center gap-1.5">
                <div className="flex items-center gap-2 text-body-1">
                  <GrLocation className="w-5 h-5" />
                  <p className="text-sm">انتخاب استان و شهر</p>
                </div>
                <FaAngleLeft className="w-3.5 h-3.5 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderMobileBot;
