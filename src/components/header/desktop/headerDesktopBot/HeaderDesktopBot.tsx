import { useState, useEffect } from "react";
import "./HeaderDesktopBot.css";
import { IoMdMenu } from "react-icons/io";
import { TbCirclePercentage, TbGiftCard } from "react-icons/tb";
import { RiShoppingBasketFill } from "react-icons/ri";
import { FaFireFlameCurved } from "react-icons/fa6";
import { BiSolidDiscount } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
const initialNavItems = [
  {
    icon: <TbCirclePercentage className="icon" />,
    text: "شگفت‌انگیزها",
  },
  {
    icon: <RiShoppingBasketFill className="icon" />,
    text: "سوپرمارکت",
  },
  {
    icon: <TbGiftCard className="icon" />,
    text: "کارت هدیه",
  },
  {
    icon: <FaFireFlameCurved className="icon-fire" />,
    text: "پرفروش‌ترین‌ها",
  },
  {
    icon: <BiSolidDiscount className="icon" />,
    text: "تخفیف‌ها و پیشنهادها",
  },
];

function HeaderDesktopBot() {
  const [navItems, setNavItems] = useState(
    window.innerWidth >= 1367 ? initialNavItems : initialNavItems.slice(0, 4),
  );
  useEffect(() => {
    const handleResize = () => {
      setNavItems(
        window.innerWidth >= 1367
          ? initialNavItems
          : initialNavItems.slice(0, 4),
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="border-[#d8d8d8] border-b-[1px]">
      <div className="flex w-full mx-auto justify-between px-4 h-[40px] pb-1 container-4xl-w top-16 ">
        <div className="flex h-[40px] pb-1">
          <div className="flex items-center pl-1">
            <a
              href=""
              className="flex items-center cursor-pointer text-neutral-900"
            >
              <IoMdMenu className="w-5 h-5 text-neutral-800 ml-1" />
              <span className="flex items-center ml-1 text-neutral-800 font-bold text-[13px]">
                دسته‌بندی کالاها
              </span>
            </a>
            <span className="min-w-px h-5 bg-neutral-200 ml-0.5 mr-3.5 mt-1"></span>
          </div>
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center h-full px-1">
              <a className="flex items-center cursor-pointer nav-text pl-3">
                <div className="flex text-neutral-400 ml-1">{item.icon}</div>
                <span className="flex items-center">{item.text}</span>
              </a>
            </div>
          ))}
          <div className="flex items-center">
            <span className="min-w-px h-5 bg-neutral-200 transform"></span>
            <div className="flex items-center mr-4">
              <a
                href=""
                className="flex items-center cursor-pointer text-neutral-600 text-[12px] mt-[2px]"
              >
                سوالی دارید؟
              </a>
            </div>
            <div className="flex items-center pr-5">
              <a
                href=""
                className="flex items-center cursor-pointer text-neutral-600 text-[12px] mt-[2px]"
              >
                در دیجی‌کالا بفروشید!
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 h-35 rounded-full cursor-pointer text-neutral-700 mt-0 bg-[#FEF6EF] px-[10px] py-[5px]">
          <GrLocation className="w-5 h-5 text-[#F68B2D]" />
          <p className="text-[#F68B2D] parag pt-[3px]">
            شهر خود را انتخاب کنید
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeaderDesktopBot;
