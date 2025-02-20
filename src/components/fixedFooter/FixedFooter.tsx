import { RiHome2Line } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import "./FixedFooter.css";
import UseResponsiveState from "../../hooks/UseResponsiveState";
function FixedFooter() {
  const fixedFooterItem = [
    {
      icon: (
        <RiHome2Line
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      ),
      parag: "خانه",
    },
    {
      icon: (
        <BiCategoryAlt
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      ),
      parag: "دسته‌بندی",
    },
    {
      icon: (
        <CgShoppingCart
          style={{
            width: "24px",
            height: "24px",
          }}
          className="transform scale-x-[-1]"
        />
      ),
      parag: "  سبد خرید",
    },
    {
      icon: (
        <FaPlay
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      ),
      parag: "مگنت",
    },
    {
      icon: (
        <IoPersonOutline
          style={{
            width: "24px",
            height: "24px",
          }}
        />
      ),
      parag: "دیجی‌کالای من",
    },
  ];
  const isDesktopView = UseResponsiveState(1023);
  return (
    <>
      {!isDesktopView && (
        <div className="w-full fixed bottom-0 shadow-1-top h-[50px] z-20 bg-white ">
          <div className="flex w-full h-full">
            {fixedFooterItem.map((item, index) => (
              <a
                key={index}
                href=""
                className=" flex-col items-center justify-center py-1  w-52 h-full"
              >
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-caption-footer text-neutral-900 pt-0.5">
                    {item.parag}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default FixedFooter;
