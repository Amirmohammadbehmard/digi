import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import React from "react";
function BottomOfUpperSection() {
  const sections = [
    {
      title: "با دیجی‌کالا",

      links: [
        {
          href: "https://about.digikala.com/newsroom/",
          text: "اتاق خبر دیجی‌کالا",
        },
        {
          href: "/landings/seller-introduction/",
          text: "فروش در دیجی‌کالا",
        },
        {
          href: "https://careers.digikala.com/",
          text: "فرصت‌های شغلی",
        },
        {
          href: "https://digikalapublic.whistleblowernetwork.net/frontpage",
          text: "گزارش تخلف در دیجی‌کالا",
        },
        {
          href: "/page/contact-us/",
          text: "تماس با دیجی‌کالا",
        },
        {
          href: "https://about.digikala.com/",
          text: "درباره دیجی‌کالا",
        },
      ],
    },
    {
      title: "خدمات مشتریان",
      links: [
        {
          href: "/faq/",
          text: "پاسخ به پرسش‌های متداول",
        },
        {
          href: "/faq/question/83/",
          text: "رویه‌های بازگرداندن کالا",
        },
        {
          href: "/page/terms/",
          text: "شرایط استفاده",
        },
        {
          href: "/page/privacy/",
          text: "حریم خصوصی",
        },
        {
          href: "/page/bug-report/",
          text: "گزارش باگ",
        },
      ],
    },
    {
      title: "راهنمای خرید از دیجی‌کالا",
      links: [
        {
          href: "/faq/question/649/",
          text: "نحوه ثبت سفارش",
        },
        {
          href: "/faq/question/79/",
          text: "رویه ارسال سفارش",
        },
        {
          href: "/faq/question/81/",
          text: "شیوه‌های پرداخت",
        },
      ],
    },
  ];
  const socialLinks = [
    {
      icon: <FaInstagram />,
    },
    {
      icon: <FaTwitter />,
    },
    {
      icon: <FaLinkedin />,
    },
    {
      icon: <SiAparat />,
    },
  ];
  return (
    <div className="flex w-full h-[270px] justify-between mb-4">
      {sections.map((section, index) => (
        <div key={index} className="block h-full w-[25%]">
          <p className="text-neutral-950 text-[15px] mb-4 block ">
            {section.title}
          </p>
          {section.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              className="text-[14px] text-neutral-500 mb-4 block"
              href={link.href}
            >
              {link.text}
            </a>
          ))}
        </div>
      ))}
      <div className="w-[323px] h-full flex flex-col ">
        <div className="w-full flex flex-col justify-center mt-8 sm:mt-0">
          <h4 className="mb-5 text-[15px] text-neutral-950">همراه ما باشید!</h4>
          <div className="flex items-center">
            {socialLinks.map((item, index) => (
              <a key={index} className="ml-10">
                <div className="flex">
                  {React.cloneElement(item.icon, {
                    className: "w-[32px] h-[32px] text-neutral-500",
                  })}
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-start mt-8">
          <h4 className="block text-[14.98px] text-neutral-950 mb-5">
            با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
          </h4>
          <div className="w-full flex items-center">
            <form className="w-full flex">
              <label className="px-2 w-[260px]  bg-custom-form h-[48px] rounded-lg flex items-center">
                <input
                  className="px-2 w-[260px] bg-custom-form text-[13px]"
                  type="email"
                  placeholder="ایمیل شما"
                />
              </label>
              <button
                className=" flex items-center justify-center rounded-md mr-2 bg-[#E0E0E2] h-[48px] w-[60px]"
                type="submit"
              >
                <div className="flex items-center justify-center text-[white] text-[13px]">
                  ثبت
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BottomOfUpperSection;
