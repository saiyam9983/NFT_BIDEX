import React, { useState } from "react";
import { Modal } from "antd";
import UploadMedia from "./UploadMedia";
import CreateNFTModal from "./CreateNFTModal";
import { Switch } from "antd";

const CreateNFT = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="max-w-[1100px] mx-auto py-5 px-[40px]">
        <h2 className="capitalize font-bold text-2xl ">create new NFT </h2>
        <p className="text-grey  font-semibold capitalize text-xl">
          Single edition on Ethereum
        </p>
        <div className="flex flex-col md:flex-row gap-[40px]">
          <div className="">
            <div className="pt-5 pb-5">
              <h2 className="font-bold capitalize text-xl pb-2 ">choose wallet</h2>
              <div className="flex justify-between  border-2 rounded-lg p-3  items-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="p-2 bg-[#427AE8]  rounded-full ">
                    <img
                      src={process.env.PUBLIC_URL + "./assets/vector.png"}
                      alt=""
                      className="w-[63%] mx-auto   gap-5  "
                    />
                  </div>
                  <p className="p-0 m-0">0xfDB86...BFDA</p>
                </div>
                <button className="">success</button>
              </div>
            </div>
            <div className="pt-5 pb-5">
              <h2 className="font-bold capitalize text-xl pb-2">upload file</h2>
              <UploadMedia />
            </div>
            <div className="pt-5 pb-5">
              <h2 className="font-bold capitalize text-xl pb-2 ">price</h2>
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="inline-full-name"
                type="text"
                placeholder="Enter price for one piece"
              />
            </div>
            <div className="border rounded-lg p-5">
              <div className="flex justify-between items-center">
                <h4 className="text-md font-bold capitalize">service fee</h4>
                <h4 className="text-md font-bold capitalize">2.5%</h4>
              </div>
              <hr />
              <h4 className="text-md font-bold mt-3">you will receive</h4>
            </div>
            <div className="pt-5 pb-5">
              <h2 className="font-bold capitalize text-md  pb-2 ">
                choose collection
              </h2>
              <div className="flex justify-between  items-center gap-5 flex-col md:flex-row">
                <div className="flex-1">
                  <div className="border p-5 flex flex-col  max-w-[200px] rounded-lg ">
                    <button
                      className="bg1 rounded-full mx-auto p-[20px]"
                      onClick={showModal}
                    ></button>
                    <Modal
                      title="Collection ERC-721"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      className="rounded-lg border"
                    >
                      <CreateNFTModal />
                    </Modal>
                    <h5 className="font-bold text-dark capitalize text-center pt-5">
                      rariable
                    </h5>
                    <p className="text-grey text-center">RARI</p>
                  </div>
                </div>

                <div>
                  <Switch defaultChecked onChange={onChange} />
                </div>
              </div>
            </div>
            <div className="pt-5 pb-5">
              <h2 className="font-bold capitalize text-md  pb-2 ">Name</h2>
              <input
                class="bg-gray-200 appearance-none border-2 placeholder-grey-50 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="inline-full-name"
                type="text"
                placeholder="Redeemable T-Shirt with logo&quot"
              />
            </div>

            <div className="pt-5 pb-5">
              <h2 className="font-bold capitalize text-md  pb-2 ">
                Description (Optional)
              </h2>
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="inline-full-name"
                type="text"
                placeholder="Purchasing you'll be able to get the real T-Shirt&quot;"
              />
            </div>

            <div className="pt-5 pb-5">
              <h2 className="font-bold capitalize text-md  pb-2 ">Royalties</h2>
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="inline-full-name"
                type="text"
                placeholder="10 %"
              />
            </div>
            <div className="pt-5 pb-5">
              <h2 className="font-bold capitalize text-md  pb-2 ">charity</h2>
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="inline-full-name"
                type="text"
                placeholder="10 %"
              />
            </div>
            <div>
              <h2 className="font-bold capitalize text-md  pb-2 ">
                Suggested: 0%, 10%, 20%, 30%. Maximum is 50%
              </h2>
              <button className="border text-center text-black p-2  font-bold rounded-lg w-full">
                Show advanced settings
              </button>
            </div>
            <div className="flex justify-between items-center">
              <button className="border text-center capitalize text-black px-3 py-2 rounded-lg my-6">
                create item
              </button>
              <p className="p-0 m-0 capitalize text-md ">unsaved changes?</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="pt-5 pb-5">
              <h2 className="font-bold capitalize text-xl ">preview</h2>
              <div className="border-2 rounded-lg p-3">
                <div className="flex items-center gap-5 ">
                  <div className="p-2 bg-[#427AE8]  rounded-full border ">
                    <img
                      src={process.env.PUBLIC_URL + "./assets/vector.png"}
                      alt=""
                      className="w-[63%] mx-auto   gap-5  "
                    />
                  </div>
                  <p className="p-0 m-0">0xfDB86...BFDA</p>
                </div>
                <p className="text-center max-w-[200px] mx-auto p-5">
                  Upload file and choose collection to preview your brand new
                  NFT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
