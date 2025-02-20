import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
function MobileLastProductBox() {
  return (
    <div className="bg-white rounded-l-md overflow-hidden w-auto h-[219px] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center px-8 rounded-l-md min-w-[160px] h-full">
        <Link to="/" className="flex flex-col items-center justify-center">
          <div className="rounded-full p-2 border-solid border-[2.2px] border-[#19BFD3]">
            <LuArrowLeft className="w-8 h-8 text-[#19BFD3]" />
          </div>
          <p className="text-neutral-700 mt-3 text-[14px]">مشاهده همه</p>
        </Link>
      </div>
    </div>
  );
}
export default MobileLastProductBox;
