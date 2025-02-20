import { MdKeyboardArrowUp } from "react-icons/md";
import ContactSupport from "./contactSupport/ContactSupport";
import InstallApp from "./installApp/InstallApp";
import AccordionDynamic from "./accordionDynamic/AccordionDynamic";
import AccordionBusinessPartners from "./contAccordionBusinessPartners/AccordionBusinessPartners";
import LastAccordion from "./lastAccordion/LastAccordion";
function MobileFooter() {
  return (
    <div className="flex flex-col justify-center py-4 px-5 mb-12 w-full">
      <button className="relative flex items-center rounded-md">
        <div className="flex items-center justify-center relative grow">
          <span
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="text-[12px] text-custom-blue"
          >
            بازگشت به بالا
          </span>
          <div className="flex mr-2 fill-secondary-500 text-custom-blue">
            <MdKeyboardArrowUp size={22} />
          </div>
        </div>
      </button>
      <ContactSupport />
      <InstallApp />
      <AccordionDynamic />
      <AccordionBusinessPartners />
      <LastAccordion />
    </div>
  );
}
export default MobileFooter;
