import { Link } from "react-router-dom";
interface Item {
  address: string;
}
interface FirstFixedFourDigitAdvertisingProps {
  items: Item[];
}
function FirstFixedFourDigitAdvertising({
  items,
}: FirstFixedFourDigitAdvertisingProps) {
  return (
    <div className="container-2xl-w mx-auto lg:px-4 2xl:px-0 px-3 h-full mb-3">
      <div className="flex flex-wrap items-center justify-center h-full min-h-[182px] w-full">
        {items.map((item, index) => (
          <Link
            to="/"
            className="w-[calc(50%-16px)] lg:w-[calc(25%-16px)] box-border m-2 flex items-center h-full justify-center"
            key={index}
          >
            <img
              className="w-full h-full object-cover inline-block rounded-2xl"
              src={item.address}
              alt={`Ad ${index + 1}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FirstFixedFourDigitAdvertising;
