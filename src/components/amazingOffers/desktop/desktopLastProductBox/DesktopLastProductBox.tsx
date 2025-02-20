import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
function DesktopLastProductBox() {
  return (
    <div className="ml-[2px] bg-white h-[254px] rounded-l-md overflow-hidden">
      <div className="flex flex-col items-center justify-center px-8 rounded-l-md h-full w-auto min-w-[160px]">
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
export default DesktopLastProductBox;
