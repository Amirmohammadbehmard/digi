import UpperSectionOfDesktopFooter from "./upperSection/UpperSectionOfDesktopFooter";
import UpperOfDownSection from "./downSection/upperOfDownSection/UpperOfDownSection";
import BottemOfDownSection from "./downSection/bottemOfDownSection/bottemOfDownSection";

function DesktopFooter() {
  return (
    <>
      <footer className="w-full border-t-[1px] border-[custom-border-color] pt-8 mt-12 container-4xl-w mx-auto px-5">
        <UpperSectionOfDesktopFooter />
        <UpperOfDownSection />
      </footer>
      <BottemOfDownSection />
    </>
  );
}

export default DesktopFooter;
