import { useState } from "react";
import ItemAccordionBusinessPartners from "../itemAccordionBusinessPartners/ItemAccordionBusinessPartners";
interface AccordionItem {
  id: number;
  address: string;
}
function AccordionBusinessPartners() {
  const [openItems, setOpenItems] = useState<boolean[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenItems((prev) => {
      const newOpenItems = [...prev];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };
  const accordionItemsOne: AccordionItem[] = [
    {
      id: 1,
      address: "https://www.digikala.com/statics/img/svg/footer/digimag.svg",
    },
    {
      id: 2,
      address: "https://www.digikala.com/statics/img/svg/footer/digipay.svg",
    },
    {
      id: 3,
      address: "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
    },
    {
      id: 4,
      address: "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
    },
    {
      id: 5,
      address: "https://www.digikala.com/statics/img/svg/footer/digiclub.svg",
    },
    {
      id: 6,
      address: "https://www.digikala.com/statics/img/svg/footer/jet.svg",
    },
    {
      id: 7,
      address: "https://www.digikala.com/statics/img/svg/footer/digify.svg",
    },
    {
      id: 8,
      address: "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg",
    },
    {
      id: 9,
      address: "https://www.digikala.com/statics/img/svg/footer/diginext.svg",
    },
    {
      id: 10,
      address: "https://www.digikala.com/statics/img/svg/footer/ganjeh.svg",
    },
    {
      id: 11,
      address:
        "https://www.digikala.com/statics/img/svg/footer/digiexpress.svg",
    },
    {
      id: 12,
      address: "https://www.digikala.com/statics/img/svg/footer/smartech.svg",
    },
  ];
  const accordionItemsTwo: AccordionItem[] = [
    {
      id: 1,
      address:
        "https://www.digikala.com/statics/img/svg/footer/digikala-service.svg",
    },
    {
      id: 2,
      address:
        "https://www.digikala.com/statics/img/svg/footer/digikala-business.svg",
    },
  ];
  return (
    <div>
      <div className="border-b">
        <button
          onClick={() => toggleAccordion(0)}
          className="w-full flex justify-between items-center py-4"
        >
          <span className="text-[14px]">شرکت تجاری</span>
          <span
            className={`transition-transform ${
              openItems[0] ? "rotate-180" : ""
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
        {openItems[0] && (
          <div className="text-caption text-neutral-700">
            <div className="w-full">
              <div className="flex items-start justify-end flex-wrap gap-[1px] bg-neutral-200">
                {accordionItemsOne.map((item) => (
                  <div
                    className="h-20 w-[33%] px-5 grow flex flex-col items-center justify-center bg-white"
                    key={item.id}
                  >
                    <ItemAccordionBusinessPartners {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full ">
              <div className="flex items-start justify-end flex-wrap gap-[1px] bg-neutral-200">
                {accordionItemsTwo.map((item) => (
                  <div
                    className="h-20 w-[33%] px-5 grow flex flex-col items-center justify-center bg-white"
                    key={item.id}
                  >
                    <ItemAccordionBusinessPartners {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default AccordionBusinessPartners;
