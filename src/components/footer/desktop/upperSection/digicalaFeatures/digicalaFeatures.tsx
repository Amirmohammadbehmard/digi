const DigicalaFeatures = () => {
  const features = [
    {
      icon: "	https://www.digikala.com/statics/img/svg/footer/express-delivery.svg",
      text: "اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس",
      alt: "اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس",
      link: "/faq/question/79/",
    },
    {
      icon: "https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg",
      text: "امکان پرداخت در محل",
      alt: "امکان پرداخت در محل",
      link: "/faq/question/81/",
    },
    {
      icon: "https://www.digikala.com/statics/img/svg/footer/support.svg",
      text: "۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ",
      alt: "۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ",
      link: "/page/contact-us/",
    },
    {
      icon: "	https://www.digikala.com/statics/img/svg/footer/days-return.svg",
      text: "هفت روز ضمانت بازگشت کالا",
      alt: "هفت روز ضمانت بازگشت کالا",
      link: "/faq/question/83/",
    },
    {
      icon: "	https://www.digikala.com/statics/img/svg/footer/original-products.svg",
      text: "ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ",
      alt: "ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ",
      link: "/faq/question/82/",
    },
  ];
  return (
    <div className="flex my-8 items-center justify-between select-none">
      {features.map((item, index) => (
        <div className="w-full" key={index}>
          <a
            className="flex py-3 flex-col items-center justify-between"
            href={item.link}
          >
            <div className="w-14 h-14 leading-none">
              <img
                className="w-full h-full inline-block object-cover"
                src={item.icon}
                alt={item.alt}
              />
            </div>
            <p className="xl:text-[14px] text-[12px] text-neutral-700">
              {item.text}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};
export default DigicalaFeatures;
