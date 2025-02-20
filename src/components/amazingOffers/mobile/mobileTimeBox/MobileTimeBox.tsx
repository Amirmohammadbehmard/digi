import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
function MobileTimeBox() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  function calculateTimeLeft() {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(0, 0, 0, 0);
    const difference = Math.max(0, targetDate.getTime() - now.getTime());
    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24),
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((difference / (1000 * 60)) % 60),
    ).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0",
    );
    return { hours, minutes, seconds };
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex items-between justify-between flex-row gap-3 px-5 lg:px-0 pt-2 pb-[13px] w-full">
      <div className="flex flex-row justify-center items-center lg:flex-col gap-2 lg:gap-3">
        <div className="order-2 lg:order-1 w-[108px] h-[20px] leading-none">
          <img
            className="w-full h-full object-contain inline-block"
            src="https://www.digikala.com/statics/img/svg/typography/incredible-word.svg"
          />
        </div>
        <div className="flex gap-[2px] items-center right-0 h-6 order-3 lg:order-2">
          {["seconds", "minutes", "hours"].map((part, index) => (
            <React.Fragment key={part}>
              {index > 0 && <span className="text-white w-1 ml-[2px]">:</span>}
              <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-[4px]">
                <div className="flex justify-center items-center text-neutral-800 text-center w-[20px] h-[20px] text-[12px]">
                  <span className="font-semibold">
                    {timeLeft[part as keyof typeof timeLeft]}
                  </span>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="w-[26px] h-[26px] leading-none">
          <img
            className="w-full h-full inline-block object-contain"
            src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg"
          />
        </div>
      </div>
      <div className="flex justify-end items-center text-white h-[26px] w-[83px]">
        <span className="sm:text-[12px] text-[11px]">
          {windowWidth >= 380 ? "مشاهده همه" : "همه"}
        </span>
        <IoIosArrowBack className="text-[13px]" />
      </div>
    </div>
  );
}
export default MobileTimeBox;
