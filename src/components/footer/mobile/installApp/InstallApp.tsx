function InstallApp() {
  return (
    <div className="w-full flex justify-between items-center border-b-[0.3px] border-b-neutral-200 py-3 h-[78px]">
      <div className="flex items-center justify-center gap-2">
        <div className="w-11 h-11 flex justify-center items-center">
          <div className="w-[44px] h-[44px] leading-none">
            <img
              className="w-full inline-block"
              src="https://www.digikala.com/statics/img/png/footerlogo2.webp"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px]">تجربه خرید بهتر در</span>
          <title className="block text-[15px]">اپلیکیشن دیجی‌کالا</title>
        </div>
      </div>
      <button className=" flex items-center justify-center rounded-md w-[63px] h-[40px] bg-black">
        <div className="text-[14px] text-[white]">دانلود</div>
      </button>
    </div>
  );
}
export default InstallApp;
