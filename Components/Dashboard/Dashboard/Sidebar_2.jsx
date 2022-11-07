import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Sidebar_2 = () => {
  const [slug, setSlug] = useState();
  if (typeof window !== "undefined") {
    let data = window.location.pathname;
    setSlug(data);
  }
  const isSidebarAccordionActive = () => {
    let split = slug?.split("/");
    let urlList = [];
    NavItems.map((item) => {
      urlList.push(
        item.subMenu?.map((subItem) => {
          return subItem?.url;
        })
      );
    });
    console.log("/" + split);
    return urlList.findIndex((items) => items?.includes("/" + split));
  };
  useEffect(() => {
    isSidebarAccordionActive();
  }, []);
  const NavItems = [
    {
      title: "Dashboard",
      url: "/",
    },
    {
      title: "Order",
      url: "/order",
    },
    {
      title: "Product",
      url: "/product",
      subMenu: [
        {
          title: "Product",
          url: "/product",
        },
        {
          title: "Product Category",
          url: "/add_category",
        },
      ],
    },
    {
      title: "Courier",
      url: "/courier",
    },
    {
      title: "Stock",
      url: "/stock",
      subMenu: [
        {
          title: "Inventory",
          url: "/inventory",
        },
        {
          title: "Stock In",
          url: "/stock_in",
        },
        {
          title: "Product Return",
          url: "/product_return",
        },
      ],
    },
    {
      title: "Bulk SMS",
      url: "/bulk_sms",
    },
    {
      title: "Customers",
      url: "/customer",
    },
    {
      title: "Website Setting",
      url: "/website_setting",
    },
    {
      title: "Plugins",
      url: "/plugin",
    },
    {
      title: "Offers",
      url: "/offer",
    },
    {
      title: "Support Ticket",
      url: "/support_ticket",
    },
  ];
  return (
    <div>
      <Accordion preExpanded={`${isSidebarAccordionActive()}`}>
        {NavItems.map((item, index) => (
          <AccordionItem key={index} uuid={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='flex items-baseline'>
                  <span className='block text-[16px] mr-2'>{item?.icon}</span>
                  <span className='block text-[13px]'>{item?.title}</span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item?.subMenu?.map((subItem, index) => (
                <a
                  href={subItem?.url}
                  className={(navData) =>
                    navData.isActive ? "block active " : "block"
                  }
                  key={index}
                >
                  <div className='flex items-baseline'>
                    <span className='block text-[16px] mr-2'>
                      {/* {subItem?.icon} */}
                    </span>
                    <span className='block text-[13px]'>{subItem?.title}</span>
                  </div>
                </a>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar_2;
