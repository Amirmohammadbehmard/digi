import { useEffect, useState } from "react";
import DesktopContainerAmazingOffers from "./desktop/desktopContainerAmazingOffers/DesktopContainerAmazingOffers";
import MobileContainerAmazingOffers from "./mobile/mobileContainerAmazingOffers/MobileContainerAmazingOffers";
function AmazingOffers() {
  const [isHiddenDesktop, setIsHiddenDesktop] = useState(
    window.innerWidth > 1023,
  );
  useEffect(() => {
    const handleResize = () => {
      setIsHiddenDesktop(window.innerWidth > 1023);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {!isHiddenDesktop && <MobileContainerAmazingOffers />}
      {isHiddenDesktop && <DesktopContainerAmazingOffers />}
    </>
  );
}
export default AmazingOffers;
