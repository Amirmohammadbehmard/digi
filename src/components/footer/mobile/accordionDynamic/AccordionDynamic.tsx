import { useState } from "react";
interface AccordionItem {
  id: number;
  title: string;
  description: string | string[];
}
function AccordionDynamic() {
  const [openItems, setOpenItems] = useState<boolean[]>([]);
  const toggleAccordion = (index: number) => {
    setOpenItems((prev) => {
      const newOpenItems = [...prev];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };
  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: "با دیجیکالا",
      description: [
        "اتاق خبر دیجی‌کالا",
        " فروش در دیجی‌کالا",
        "فرصت‌های شغلی",
        "گزارش تخلف در دیجی‌کالا",
        "تماس با دیجی‌کالا",
        "درباره دیجی‌کالا",
      ],
    },
    {
      id: 2,
      title: "خدمات مشتریان",
      description: [
        "پاسخ به پرسش‌های متداول",
        "رویه‌های بازگرداندن کالا",
        "شرایط استفاده",
        "حریم خصوصی",
        "گزارش باگ",
      ],
    },
    {
      id: 3,
      title: "راهنمای خرید از دیجی‌کالا",
      description: ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه‌های پرداخت"],
    },
  ];
  return (
    <div>
      {accordionItems.map((item, index) => (
        <div key={item.id} className="border-b">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4"
          >
            <span className="text-[14px]">{item.title}</span>
            <span
              className={`transition-transform ${
                openItems[index] ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 transform scale-[-1]"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {openItems[index] && (
            <div className="pb-4 text-sm text-gray-600">
              {Array.isArray(item.description) ? (
                item.description.map((line: string, lineIndex: number) => (
                  <p
                    key={lineIndex}
                    className={`${
                      lineIndex === 0 ? "mb-4" : "mt-4"
                    } text-[13px]`}
                  >
                    {line}
                  </p>
                ))
              ) : (
                <p>{item.description}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default AccordionDynamic;
