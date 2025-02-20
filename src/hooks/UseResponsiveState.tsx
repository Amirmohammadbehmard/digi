import { useState, useEffect } from "react";

const UseResponsiveState = (breakpoint: number): boolean => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > breakpoint,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopView(window.innerWidth > breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isDesktopView;
};

export default UseResponsiveState;
