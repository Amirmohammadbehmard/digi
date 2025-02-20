import DesktopFooter from "./desktop/DesktopFooter";
import MobileFooter from "./mobile/MobileFooter";
import UseResponsiveState from "../../hooks/UseResponsiveState";
function Footer() {
  const isDesktopView = UseResponsiveState(1023);
  return (
    <>
      {!isDesktopView && <MobileFooter />}
      {isDesktopView && <DesktopFooter />}
    </>
  );
}
export default Footer;
