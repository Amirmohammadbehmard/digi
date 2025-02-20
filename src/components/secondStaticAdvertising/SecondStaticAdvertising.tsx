import { Link } from "react-router-dom";
import LeftSecondStaticAdvertising from "./ItemSecondStaticAdvertising/leftSecondStaticAdvertising/LeftSecondStaticAdvertising";
import RightSecondStaticAdvertising from "./ItemSecondStaticAdvertising/rightSecondStaticAdvertising/RightSecondStaticAdvertising";
function SecondStaticAdvertising() {
  return (
    <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 px-5 w-56 lg:h-[110px] h-[187px] mb-3">
      <Link
        to="/"
        className="relative overflow-hidden bg-[#EBEEED] user-select-none h-full w-full flex flex-col lg:flex-row justify-between rounded-xl lg:items-center px-5 lg:px-10 pt-4 pb-3"
      >
        <div className="absolute left-0 top-0 bottom-0 right-0 z-1 bg-[url('https://www.digikala.com/statics/img/svg/typography/freshPattern.svg')] bg-left bg-no-repeat">
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between h-full px-5 lg:py-0 py-2">
            <RightSecondStaticAdvertising />
            <LeftSecondStaticAdvertising />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SecondStaticAdvertising;
