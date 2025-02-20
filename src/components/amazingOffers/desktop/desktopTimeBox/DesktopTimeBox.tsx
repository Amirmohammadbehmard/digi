import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
function DesktopTimeBox() {
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
  return (
    <Link
      to="/"
      className="w-auto h-full flex items-center justify-between flex-col gap-3 px-0 pt-5 pb-3 !py-0 mx-8"
    >
      <div className="flex justify-center items-center flex-col gap-3">
        <div className="order-1 w-[88px] h-[88px] leading-none">
          <img
            className="inline-block w-full h-full object-contain"
            src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
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
        <div className="order-3 w-[80px] h-[80px]">
          <img
            className="w-full h-full inline-block object-contain"
            src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg"
          />
        </div>
      </div>
      <div className="flex justify-center items-center text-button-2 text-white pb-4">
        <span className="text-[11.5px] ">مشاهده همه</span>
        <IoIosArrowBack className="text-[13px]" />
      </div>
    </Link>
  );
}
export default DesktopTimeBox;
