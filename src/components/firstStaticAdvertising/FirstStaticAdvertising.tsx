
import UseResponsiveState from "../../hooks/UseResponsiveState";

function FirstStaticAdvertising() {
  const isDesktopView = UseResponsiveState(1023);
  return (
    <>
      {!isDesktopView && (
        <div className="container-2xl-w mx-auto pb-1 p-0.5">
          <div className="px-2">
            <div className="rounded-lg overflow-hidden cursor-pointer">
              <div className="leading-none">
                <img
                  className="w-full inline-block"
                  src="https://dkstatics-public.digikala.com/digikala-admin-landing/d4d0e63e84d713ef0b19e00edcb42d4ac5c259ec_1725786112.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FirstStaticAdvertising;
