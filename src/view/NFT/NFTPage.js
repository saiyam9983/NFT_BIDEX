import { Dropdown, Space } from "antd";

import React from "react";
import { RiArrowUpDownFill } from "react-icons/ri";
import { DownOutlined } from "@ant-design/icons";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineFileText,
  AiFillRedEnvelope,
} from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { BsListNested } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import NFTCard from "../../components/Cards/NFTCard/NFTCard";
import { Button } from "../../components/Button/Primary";
const NFTPage = () => {
  const FakeData = [
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzE2NjIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzE0LmdpZg==",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzE1MzEuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
  ];
  const items = [
    {
      //   label: "Event",
    },
  ];
  const data = [
    {
      icon: <BiTransfer size={30} />,
      title: "transfer",
      price: "",
      from: "BigGlen",
      to: "7C9BE9",
      date: "a day ago",
    },
    {
      icon: <IoMdCart size={30} />,
      title: "scale",
      price: "0.143 ETH",
      from: "BigGlen",
      to: "7C9BE9",
      date: "a day ago",
    },
    {
      icon: <AiFillRedEnvelope size={30} />,
      title: "List",
      price: "0.143 ETH",
      from: "BigGlen",
      to: "",
      date: "a day ago",
    },
    {
      icon: <BiTransfer size={30} />,
      title: "transfer",
      price: "",
      from: "416933",
      to: "BigGlen",
      date: "a day ago",
    },
    {
      icon: <IoMdCart size={30} />,
      title: "sale",
      price: "",
      from: "416933",
      to: "BigGlen",
      date: "a day ago",
    },
  ];

  return (
    <div>
      <div className="max-w-[1500px] mx-auto w-full ">
        <div className="flex flex-col md:flex-row justify-center gap-[20px] py-5 px-[30px]">
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/nftimg.png"}
              alt=""
              className="w-full mx-auto "
            />
          </div>
          <div className="">
            <h6 className="text-[#7F00FF] font-bold">WHIKO_LAND</h6>
              <h4 className="text-lg text-[#7F00FF]">#5680</h4>
            <div className="flex items-center gap-4 py-4">
              <div>
                <h5 className="text-[#7F00FF]">
                  {" "}
                  Owned by <span className="text-[#7F00FF]">7C9BE9</span>{" "}
                </h5>
              </div>
              <div className="flex justify-center items-center gap-5">
                <div className="flex items-center justify-center gap-2">
                  <AiOutlineEye size={20} className="text-grey" />
                  <h5 className="m-0 text-[#7F00FF]">29k views</h5>
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <AiFillHeart size={20} className="text-grey" />
                  <h5 className="m-0 text-[#7F00FF]">2 favourites</h5>
                </div>
              </div>
            </div>
            <div className="border p-3 rounded-lg">
              <h5 className="capitalize text-grey">best offer </h5>
              <div className="flex gap-4">
                <h2 className="text-[#7F00FF] text-2xl font-bold">0.1091 WETH</h2>
                <h5 className="text-[#7F00FF]">$173.52</h5>
              </div>
              <div className="flex justify-center items-center gap-2 border rounded-lg p-2 max-w-[300px] w-full">
                <MdLocalOffer className="text-darkblue" />
                <p className="capitalize text-[#7F00FF] p-0 m-0 font-bold ">
                  make offer
                </p>
              </div>
            </div>
            <div className="my-10 border items-center rounded-lg ">
              <div className="flex gap-4 items-center px-2 py-3">
                <BsListNested size={25} className="text-grey" />
                <h4 className="capitalize text-[#7F00FF] font-bold text-lg p-0 m-0">
                  description
                </h4>
              </div>
              <hr />
              <p className="py-4 px-6 text-md p-0 m-0  text-md text-[#7F00FF]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation{" "}
              </p>
              <hr />
              <div className="flex gap-4 items-center p-3 ">
                <AiOutlineFileText size={25} className="text-grey" />
                <h4 className="capitalize text-[#7F00FF] font-bold text-lg p-0 m-0">
                  details
                </h4>
              </div>
              <hr />
              <div className="  p-3 ">
                <div className="flex  gap-[40px]  justify-between items-center">
                  <h4 className="capitalize text-lg text-[#7F00FF]" >contract address</h4>
                  <h4 className="text-lg  font-bold uppercase text-[#7F00FF]">
                    0x4a79...6ba6
                  </h4>
                </div>
                <div className="flex  gap-[40px] justify-between  items-center">
                  <h4 className="capitalize  text-lg text-[#7F00FF]">token ID</h4>
                  <h4 className="text-lg  font-bold uppercase text-[#7F00FF]">5680</h4>
                </div>

                <div className="flex  gap-[40px] justify-between  items-center">
                  <h4 className="capitalize text-lg text-[#7F00FF]">token standard</h4>
                  <h4 className="text-lg  font-bold uppercase text-[#7F00FF]">erc-721</h4>
                </div>
                <div className="flex  gap-[40px] justify-between  items-center">
                  <h4 className="capitalize  text-lg text-[#7F00FF]">chain</h4>
                  <h4 className="text-lg  font-bold capitalize text-[#7F00FF]">ethereum</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[30px]">
          <div className="border rounded-lg ">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className=" border-b-2 px-3 py-3">
                  <div className="flex gap-4 items-center ">
                    <RiArrowUpDownFill size={25} className="text-black" />
                    <h4 className="capitalize text-[#7F00FF] font-bold text-lg p-0 m-0">
                      item activity
                    </h4>
                  </div>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <div className="border rounded-lg  mt-4 mx-3">
              {" "}
              <Dropdown
                menu={{
                  items,
                }}
                className="mx-2"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="px-2">
                    <h4 className="capitalize text-[#7F00FF] font-bold text-lg p-0 m-0 py-2 ">
                      {" "}
                      Filter
                    </h4>

                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-[#7F00FF] uppercase bg-gray-50 dark:bg-gray-700 dark:text-[#7F00FF]">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 capitalize text-[#7F00FF] text-lg "
                    >
                      event
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 capitalize text-[#7F00FF] text-lg"
                    >
                      price
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 capitalize text-[#7F00FF] text-lg"
                    >
                      from
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 capitalize text-[#7F00FF] text-lg"
                    >
                      to
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 capitalize text-[#7F00FF] text-lg"
                    >
                      date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, index) => {
                    return (
                      <>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-[#7F00FF] whitespace-nowrap dark:text-white"
                          >
                            <div className="flex items-center gap-5">
                              <div>{data.icon}</div>

                              <h4 className="text-lg text-[#7F00FF] p-0 m-0 capitalize">
                                {data.title}
                              </h4>
                            </div>
                          </th>
                          <td className="py-4 px-6 font-bold text-[#7F00FF] text-lg">
                            {data.price}
                          </td>
                          <td className="py-4 px-6 text-[#7F00FF] text-lg">
                            {data.from}
                          </td>
                          <td className="py-4 px-6 text-[#7F00FF] text-lg">
                            {data.to}
                          </td>
                          <td className="py-4 px-6 text-[#7F00FF] text-lg">
                            {data.date}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="px-[30px] my-10">
          <div className="border  rounded-lg ">
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className=" border-b-2 px-3 py-3">
                  <div className="flex gap-4 items-center ">
                    <BsFillGrid3X2GapFill size={25} className="text-grey" />
                    <h4 className="capitalize text-[#7F00FF] font-bold text-lg p-0 m-0">
                      more from this collection
                    </h4>
                  </div>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <div className="flex gap-5 justify-center flex-col md:flex-row items-center pt-5">
              {FakeData.map((item, key) => (
                <NFTCard key={key} data={item} />
              ))}
            </div>
            <div className="text-center py-5">
              <Button title={"view collection"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;
