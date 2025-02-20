type TypeItemAccordionBusinessPartners = {
  address: string;
};
function ItemAccordionBusinessPartners({
  address,
}: TypeItemAccordionBusinessPartners) {
  return (
    <div className="h-[20px] leading-none">
      <img
        className="w-full inline-block h-full object-contain"
        src={address}
      />
    </div>
  );
}
export default ItemAccordionBusinessPartners;
