import { useState, useEffect } from "react";
import HeaderCommonUp from "./common/HeaderCommonUp";
import HeaderDesktopMid from "./desktop/headerDesktopMid/HeaderDesktopMid";
import HeaderDesktopBot from "./desktop/headerDesktopBot/HeaderDesktopBot";
import HeaderMobileMid from "./mobile/headerMobileMid/HeaderMobileMid";
import HeaderMobileBot from "./mobile/headerMobileBot/HeaderMobileBot";
function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isFooterVisible, setIsFooterVisible] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsFooterVisible(false);
      } else {
        setIsFooterVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full ">
      <div className="flex flex-col">
        <div
          className={`${isMobile ? "relative" : "fixed"} top-0 w-full z-20 bg-white`}
        >
          <HeaderCommonUp />
          {!isMobile && (
            <div
              className={`${!isFooterVisible ? "border-[#d8d8d8] border-b-[1px]" : ""}`}
            >
              <HeaderDesktopMid />
            </div>
          )}
        </div>

        <div className={`${isMobile ? "mt-0" : "mt-[128px]"}`}>
          {!isMobile && isFooterVisible && (
            <div className="fixed top-[128px] z-10 bg-white w-full">
              <HeaderDesktopBot />
            </div>
          )}
        </div>
        {isMobile && (
          <>
            <HeaderMobileMid />
            <HeaderMobileBot />
          </>
        )}
      </div>
    </div>
  );
}
export default Header;
