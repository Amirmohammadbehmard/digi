import { IoSearch } from "react-icons/io5";
import { HiOutlineLogin } from "react-icons/hi";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
function HeaderDesktopMid() {
  return (
    <div className="w-full bg-white h-[68px]">
      <div className="container-4xl-w mx-auto flex justify-between md:px-4">
        <div className="flex items-center w-full py-3">
          <Link to="/" className="ml-5 shrink-0">
            <img
              className="w-[195px] h-[30px]"
              src="https://www.digikala.com/brand/full-horizontal.svg"
              alt="لوگوی دیجیکالا"
            />
          </Link>
          <div className="flex items-center h-11 w-[600px] ml-5">
            <div className="flex items-center bg-custom-input grow rounded-lg px-4 h-full">
              <IoSearch className="w-6 h-6 text-gray-400 cursor-pointer" />
              <span className="grow px-4 text-xs text-neutral-500">جستجو</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Link to="https://www.digikala.com/users/login/?backUrl=/">
            <button className="flex items-center justify-center border-[1px] border-[#e0e0e2] w-[134px] h-[37px] rounded-md ml-2">
              <HiOutlineLogin className="w-[23px] h-[23px] ml-2 text-gray-700" />
              <b className="text-xs pb-1 text-gray-700">ورود | ثبت‌نام</b>
            </button>
          </Link>
          <span className="bg-neutral-200 mx-3 block h-6 w-[1px]" />
          <Link to="/cart" className="inline-flex pr-2 lg:p-2 rounded py-2">
            <CgShoppingCart className="w-6 h-6 transform scale-x-[-1]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HeaderDesktopMid;
