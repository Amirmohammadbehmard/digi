import Toman from "../../../../assets/Toman.png";
type TProductBox = {
  imgAddress: string;
  name: string;
  discount: string;
  afterDiscount: string;
  befourDiscount: string;
};
function MobileProductBox({
  imgAddress,
  name,
  discount,
  afterDiscount,
  befourDiscount,
}: TProductBox) {
  return (
    <div className="block cursor-pointer overflow-hidden py-2 px-2 bg-white w-auto h-[219px]">
      <div className="flex flex-col gap-2">
        <div className="flex items-stretch flex-col relative">
          <div className="flex items-start mx-auto">
            <div className="w-[114px] h-[114px] leading-none">
              <img
                className="rounded-md inline-block object-contain w-full h-full"
                src={imgAddress}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="px-1 rounded-large flex items-center justify-center bg-[#D32F2F] !rounded-lg w-[34px] h-[20px]">
              <span className="text-white text-[11.5px] pt-0.5">
                {discount}
              </span>
            </div>
          </div>
        </div>
        <div className="grow flex flex-col items-stretch justify-start gap-1">
          <h3 className="text-neutral-600 h-[40px] !leading-[20px] text-[12px] line-clamp-2">
            {name}
          </h3>
          <div className="pt-1 flex flex-col items-stretch justify-between ">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-end gap-1 text-neutral-700 text-h5 grow text-h5 lg:text-[14px] !leading-[18px] lg:!leading-[24px]">
                <span className="text-[13px]">{afterDiscount}</span>
                <div className="flex h-[16px] w-[16px]">
                  <img className="h-[16px] w-[16px]" src={Toman} alt="" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pl-5">
              <div className="text-neutral-300 line-through self-end mr-auto !leading-[15px] lg:!leading-[21px] text-[13px]">
                {befourDiscount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileProductBox;
