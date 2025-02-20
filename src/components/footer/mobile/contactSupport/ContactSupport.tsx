import { TfiHeadphoneAlt } from "react-icons/tfi";
function ContactSupport() {
  return (
    <div className="w-full flex justify-between items-center border-b-[0.3px] border-b-neutral-200 py-3 h-[78px]">
      <div className="flex items-center justify-center gap-2">
        <div className="w-11 h-11 flex justify-center items-center">
          <div className="transform scale-x-[-1] w-6 h-6 text-2xl font-normal">
            <TfiHeadphoneAlt />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px]">۷ روز هفته، ۲۴ ساعت</span>
          <title className="block text-[15px]">تماس با پشتیبانی</title>
        </div>
      </div>
      <div className="w-[63px] h-[40px] flex border-black border-[1px] justify-center items-center rounded-md">
        <div className="text-[14px]">تماس</div>
      </div>
    </div>
  );
}

export default ContactSupport;
