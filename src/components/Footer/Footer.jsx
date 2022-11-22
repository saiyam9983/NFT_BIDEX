import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const FooterData = [
  {
    title: "About",
    links: [
      {
        link: "product",
      },
      {
        link: "resource",
      },
      {
        link: "term & condition",
      },
      {
        link: "FAQ",
      },
    ],
  },
  {
    title: "company",
    links: [
      {
        link: "our team",
      },
      {
        link: "partner with us",
      },
      {
        link: "privacy & policy",
      },
      {
        link: "features",
      },
    ],
  },
];
const Footer = () => {
  return (
    <div className="max-w-[1500px] mx-auto w-full px-[40px] ">
      <footer className="text-center lg:text-left ">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-4">
              <img src={process.env.PUBLIC_URL + "/assets/logo.png"}  className="mx-auto md:mx-0 mt-[-16px]"/>
              <p className="text-grey capitalize">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {FooterData.map((item, index) => (
              <>
                <FooterLinks data={item} key={index} />
              </>
            ))}

            <div className="">
              <h6 className="capitalize  font-bold mb-4 flex justify-center text-xl  md:justify-start">
                Contact
              </h6>

              <p className="mb-4">
                <a href="#!" className="text-[#AFAFAF] ">
                  +012 3456789
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#AFAFAF] break-all ">
                  adorableprogrammer@gmail.com
                </a>
              </p>
              <p className="mb-4">
                <div className="flex gap-5 md:justify-start justify-center  items-center">
                  <a href="#!" className="text-[#AFAFAF] ">
                    <AiFillYoutube size={30} />
                  </a>
                  <a href="#!" className="text-[#AFAFAF] ">
                    <BsDiscord size={30} />
                  </a>
                  <a href="#!" className="text-[#AFAFAF] ">
                    <AiOutlineInstagram size={30} />
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-6 ">
          <a href="#" className="text-[#AFAFAF] text-lg">
            Created by{" "}
            <span className="text-[#7F00FF] font-black">BIDEX NFT </span>| All
            Right Reserved!
          </a>
        </div>
      </footer>
    </div>
  );
};

const FooterLinks = ({ data }) => {
  return (
    <>
      <div className="">
        <h6 className="capitalize  font-bold mb-4  text-xl flex justify-center md:justify-start">
          {data.title}
        </h6>

        {data.links.map((link, key) => (
          <>
            {" "}
            <p className="mb-4" key={key}>
              <a href="#!" className="text-[#AFAFAF] capitalize ">
                {link.link}
              </a>
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default Footer;
