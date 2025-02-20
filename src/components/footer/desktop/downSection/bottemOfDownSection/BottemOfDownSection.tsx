function BottemOfDownSection() {
  const businessPartners = [
    {
      id: 1,
      address: "https://www.digikala.com/statics/img/svg/footer/digimag.svg",
      alt: "مجله اینترنتی دیجی‌کالا مگ",
    },
    {
      id: 2,
      address: "https://www.digikala.com/statics/img/svg/footer/digipay.svg",
      alt: "بهترین راهکارهای پرداخت آنلاین",
    },
    {
      id: 3,
      address: "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
      alt: "خرید آنلاین مد و لباس از فروشگاه اینترنتی دیجی‌استایل با همان تجربه از دیجی‌کالا",
    },
    {
      id: 4,
      address: "https://www.digikala.com/statics/img/svg/footer/digiplus.svg",
      alt: "خدمات ویژه دیجی‌کالا برای کاربران با اشتراک پلاس",
    },
    {
      id: 5,
      address: "https://www.digikala.com/statics/img/svg/footer/digiclub.svg",
      alt: "دیجی کلاب باشگاه مشتریان دیجیکالا",
    },
    {
      id: 6,
      address: "https://www.digikala.com/statics/img/svg/footer/jet.svg",
      alt: "خرید آنی سوپرمارکتی از فروشگاه های نزدیک",
    },
    {
      id: 7,
      address: "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg",
      alt: "دیجیکالا مهر - زنجیره مهربانی و لبخند",
    },
    {
      id: 8,
      address: "https://www.digikala.com/statics/img/svg/footer/diginext.svg",
      alt: "مرکز نوآوری و فناوری گروه دیجی‌کالا",
    },
    {
      id: 9,
      address:
        "https://www.digikala.com/statics/img/svg/footer/digiexpress.svg",
      alt: "سیستم حمل و نقل دیجی‌کالا",
    },
    {
      id: 10,
      address: "https://www.digikala.com/statics/img/svg/footer/ganjeh.svg",
      alt: "گنجه",
    },
    {
      id: 11,
      address: "https://www.digikala.com/statics/img/svg/footer/digify.svg",
      alt: "دیجی‌فای",
    },
    {
      id: 12,
      address: "https://www.digikala.com/statics/img/svg/footer/smartech.svg",
      alt: "اسمارتک",
    },
    {
      id: 13,
      address:
        "https://www.digikala.com/statics/img/svg/footer/digikala-business.svg",
      alt: "دیجی‌کالا بیزینس",
    },
    {
      id: 14,
      address:
        "https://www.digikala.com/statics/img/svg/footer/digikala-service.svg",
      alt: "دیجی‌کالا سرویس",
    },
  ];
  const firstRow = businessPartners.slice(0, 8);
  const secondRow = businessPartners.slice(8);
  return (
    <>
      <div className="flex xl:text-[14px] text-[12px] text-neutral-500 text-center items-center flex-col justify-between py-8">
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
        کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
        آنلاین دیجی‌کالا) است.
      </div>
      <div className="w-full h-[160px] bg-neutral-100 relative z-[999]">
        <div className="container-4xl-w mx-auto h-full">
          <div className="grid grid-cols-8 h-2/4">
            {firstRow.map((partner) => (
              <a
                key={partner.id}
                className={`border-b px-5 flex flex-col items-center justify-center ${
                  partner.id !== 1 ? "border-r" : ""
                }`}
              >
                <div className="h-5 leading-none">
                  <img
                    className="w-full h-5 inline-block object-contain"
                    src={partner.address}
                    alt={partner.alt}
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-4 h-2/4">
            {secondRow.map((partner) => (
              <a
                key={partner.id}
                className={`border-b px-5 flex flex-col items-center justify-center ${
                  partner.id !== 9 ? "border-r" : ""
                }`}
              >
                <div className="h-5 leading-none">
                  <img
                    className="w-full h-5 inline-block object-contain"
                    src={partner.address}
                    alt={partner.alt}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default BottemOfDownSection;
