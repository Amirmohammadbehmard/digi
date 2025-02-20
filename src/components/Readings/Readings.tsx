import { MdChevronLeft } from "react-icons/md";
function Readings() {
  const data = [
    {
      address:
        "https://www.digikala.com/mag/wp-content/uploads/2024/12/influenza-1.jpg",
      text: "شیوع یک بیماری خطرناک در کشور؛ توصیه‌ها را جدی بگیرید",
    },
    {
      address:
        "https://www.digikala.com/mag/wp-content/uploads/2024/12/Galaxy-A56-design-render-1024x576_cropped.jpg",
      text: "مشخصات و قیمت گلکسی A56 لو رفت",
    },
    {
      address:
        "https://www.digikala.com/mag/wp-content/uploads/2024/12/best-drama-movies-2024.jpg",
      text: "بهترین فیلم‌های درام ۲۰۲۴؛ از «بروتالیست» تا «سه دختر او»",
    },
    {
      address:
        "https://www.digikala.com/mag/wp-content/uploads/2024/12/fathers-day-cake-2.jpg",
      text: "۱۲ مدل کیک روز پدر از ساده تا لاکچری (طرز تهیه + عکس)",
    },
  ];
  return (
    <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 mb-2">
      <div className="w-full lg:rounded-lg">
        <div className="flex justify-between py-4 items-center px-5 h-[58px]">
          <p className="lg:text-[14px] text-[14px] text-neutral-900 font-bold">
            خواندنی‌ها
          </p>
          <div className="flex">
            <span className="flex items-center cursor-pointer lg:text-[14px] text-[12px] text-custom-blue">
              مطالب بیشتر در دیجی‌کالا مگ
            </span>
            <span className="flex text-custom-blue">
              <MdChevronLeft className="lg:text-[18px] text-[16.5px]" />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 items-stretch lg:justify-around px-5 lg:px-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="mb-1 border-2 border-[custom-border-color] rounded-lg flex flex-col h-full overflow-hidden"
            >
              <img
                className="w-full lg:min-h-[149px] min-h-[210px] object-cover inline-block"
                src={item.address}
                alt={item.text}
              />
              <div className="mt-2 mb-3 px-4 text-[11.5px] text-neutral-900 w-full text-right">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Readings;
