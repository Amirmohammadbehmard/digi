import { Link } from "react-router-dom";
import toman from "../../../../assets/Toman.png";
type TProductBox = {
  imgAddress: string;
  name: string;
  discount: string;
  afterDiscount: string;
  befourDiscount: string;
};
function DesktopProductBox({
  imgAddress,
  name,
  discount,
  afterDiscount,
  befourDiscount,
}: TProductBox) {
  return (
    <Link
      to="/"
      className="block cursor-pointer overflow-hidden py-2 px-2 h-[254px] bg-white"
    >
      <div className="overflow-hidden flex flex-col items-stretch justify-start h-full gap-2">
        <div className="flex items-stretch flex-col relative">
          <div className="flex items-start mx-auto">
            <div className="w-[132px] h-[132px] leading-none">
              <img
                className="w-full h-full object-contain rounded-md inline-block"
                src={imgAddress}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch justify-start gap-2">
          <div>
            <h3 className="text-neutral-600 h-[40px] !leading-[20px] text-[12px] w-[146px] !line-clamp-1">
              {name}
            </h3>
          </div>
          <div className="pt-1 flex flex-col items-stretch justify-between">
            <div className="flex items-center justify-between">
              <div className="px-1 text-white rounded-xl flex items-center justify-center h-[20px] w-[34px] bg-[#d32f2f]">
                <span className="text-white text-xs">{discount}</span>
              </div>
              <div className="flex items-center justify-end gap-1 text-neutral-700  text-h5 grow text-[14px] !leading-[24px]">
                <span className="text-[13px] font-bold">{afterDiscount}</span>
                <img className="h-[16px] w-[16px]" src={toman} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-between pl-5">
              <div className="text-neutral-300 line-through self-end mr-auto text-body-2 !leading-[21px] text-[11px] font-bold">
                {befourDiscount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default DesktopProductBox;
