import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { Input } from "antd";
const Setting = () => {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto w-full py-5 px-2">
        <h2 className="capitalize font-bold text-2xl ">profile settings </h2>
        <div className="flex  flex-col lg:flex-row  justify-center  md:gap-[90px]  gap-[30px]  pt-10">
          <div>
            <h4 className="text-capitalize text-xl font-bold capitalize ">
              account
            </h4>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "./assets/rectangle.jpg"} />

            <div className="flex flex-col md:flex-row gap-[40px] md:gap-[100px] justify-center ">
              <div className="flex-1">
                <div className="pt-5 pb-5">
                  <h2 className="font-bold capitalize text-xl ">
                    display name
                  </h2>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Enter name"
                  />
                </div>
                <div className="pt-5 pb-5">
                  <h2 className="font-bold capitalize text-xl ">username</h2>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="@ enter your name"
                  />

                  <p className="text-grey capitalize mt-2 ">
                    Your profile will be available on rarible.com/[username]
                  </p>
                </div>
                <div className="pt-5 pb-5">
                  <h2 className="font-bold capitalize text-xl ">short bio</h2>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Tell about yourself in a few words"
                  />
                </div>
                <div className="pt-5 pb-5">
                  <h2 className="font-bold capitalize text-xl ">Email</h2>
                  <p className="text-grey capitalize">
                    Your email for marketplace notifications
                  </p>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="pt-5 pb-5">
                  <h2 className="font-bold capitalize text-xl ">
                    social links
                  </h2>
                  <p className="text-grey capitalize">
                    Add your existing social links to build a stronger
                    reputation
                  </p>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="pt-5 pb-5">
                  <h2 className="font-bold capitalize text-xl ">Website URL</h2>

                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="https://"
                  />
                </div>
                <div className="pt-5 pb-5">
                  <h2 className="font-bold capitalize text-xl ">twitter</h2>
                  <Input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="inline-full-name"
                    type="text"
                    placeholder=" Enter your Twitter username"
                    prefix={<AiOutlineTwitter size={20} />}
                  />
                </div>
                <button className="bg-[#7F00FF] text-white bg-black rounded-lg p-2 px-5 capitalize text-lg">
                  save settings
                </button>
              </div>

              <div>
                <div className="shadow p-4 bg-white rounded-lg max-w-[350px] w-full mx-auto  ">
                  <img
                    src={process.env.PUBLIC_URL + "./assets/Frame.png"}
                    alt=""
                    className="w-full mx-auto"
                  />
                  <div className="py-3">
                    <h5 className="text-sm font-bold capitalize">
                      verify your account
                    </h5>
                    <p>
                      Proceed with verification process to get more visibility
                      and gain trust on Rarible
                    </p>
                    <div className="text-center">
                      <button className="capitalize text-sm border bg-white p-3 rounded-lg px-5">
                        get verified
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
