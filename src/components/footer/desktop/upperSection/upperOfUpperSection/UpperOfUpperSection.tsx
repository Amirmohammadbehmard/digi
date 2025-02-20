import { FaChevronUp } from "react-icons/fa";
function UpperOfUpperSection() {
  return (
    <>
      <div className="flex justify-between items-center select-none h-[40px] w-full">
        <div className="ml-4 w-full h-[40px] leading-[0]">
          <img
            className="w-[195px] h-[30px] inline-block object-contain"
            src="https://www.digikala.com/brand/full-horizontal.svg"
            alt="digikala - دیجی کالا"
            title=""
          />
        </div>
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center justify-center user-select-none h-full w-[152.5px] border-[1px] border-[#e0e0e2] rounded-md cursor-pointer pl-1"
        >
          <span className="text-neutral-400 ml-3 text-[11.5px] ">
            بازگشت به بالا
          </span>
          <div className="flex">
            <FaChevronUp className="w-[13px] h-[13px] text-[#a1a3a8] mt-[0.6px] " />
          </div>
        </button>
      </div>
      <div className="mb-8 mt-4 flex items-center justify-start text-neutral-700 h-[26px] pb-2">
        <span className="shrink-0 text-[11.3px]">
          تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
        </span>
        <div className="px-5 text-neutral-400 hidden md:block">|</div>
        <span className="shrink-0 text-[11.3px]">۰۲۱-۹۱۰۰۰۱۰۰</span>
        <div className="px-5 text-neutral-400 hidden md:block">|</div>
        <span className="w-full mt-1 text-[11.3px]">
          ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
        </span>
      </div>
    </>
  );
}
export default UpperOfUpperSection;
