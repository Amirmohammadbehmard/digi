import { IoMdClose } from "react-icons/io";
function HeaderMobileMid() {
  return (
    <div className="w-full pt-2 pl-4 pr-2 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <div className="p-2 cursor-pointer">
          <IoMdClose className="w-5 h-5 text-gray-500" />
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 object-contain"
            src="https://www.digikala.com/statics/img/png/Logo.webp"
            alt="لوگو دیجی‌کالا"
          />
          <h5 className="text-[15px] font-medium leading-[2.1]">
            اپلیکیشن دیجی‌کالا
          </h5>
        </div>
      </div>
      <div className="flex items-center justify-center bg-black text-white rounded-lg w-14 h-9 text-xs font-bold">
        نصب
      </div>
    </div>
  );
}
export default HeaderMobileMid;
