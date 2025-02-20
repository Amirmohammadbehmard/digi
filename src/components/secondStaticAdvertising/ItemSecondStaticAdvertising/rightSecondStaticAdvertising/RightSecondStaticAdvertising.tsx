function RightSecondStaticAdvertising() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center">
      <div className="flex items-center lg:h-auto h-[58px]">
        <div className="lg:w-[66px] lg:h-[62px] w-[40px] h-[38px] flex items-center">
          <img
            className="w-full inline-block object-contain"
            src="https://www.digikala.com/statics/img/png/amazing/fresh.webp"
          />
        </div>
        <div className="mx-2 lg:mx-5 lg:w-[250px] lg:h-[28px] w-[190px] h-[20px]">
          <img
            className="w-full inline-block"
            src="https://www.digikala.com/statics/img/svg/amazing/fresh-incredible-offer.svg"
          />
        </div>
      </div>
      <div className="items-center text-center mx-2 lg:mx-0 flex justify-center text-normal bg-[#029a49] rounded-full px-3 lg:w-[108px] lg:h-[28px] w-[98px] h-[28px]">
        <p className="inline-block lg:text-[13px] text-[12px] text-white">
          تا ۶۰٪ تخفیف
        </p>
      </div>
    </div>
  );
}
export default RightSecondStaticAdvertising;
