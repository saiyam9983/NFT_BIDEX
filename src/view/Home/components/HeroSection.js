import { Button } from "../../../components/Button/Primary";
import React from 'react';
import { Tabs } from 'antd';
import { isPlainObject } from "jquery";


export const HeroSection = () => {
  return (

      <div>
   <div className="max-w-[1100px] mx-auto">
   <div className="max-w-[1500px] mx-auto pt-5 md:pt-[2rem] px-2">
        <div className="flex  gap-[20px] md:px-0 px-2">
          
        <h1 className="text-[#7F00FF] text-sm">Trending</h1>
        <h1 className="text-[#7F00FF] text-sm">Top</h1>
        
        </div>
        <div className=" border-t flex flex -wrap pt-5  pb-5 gap-[20px] md:gap-[150px] md:px-0 px-2">
        <div className="flex flex-wrap justify-between flex-1">
          <h4 className="text-grey text-sm font-bold capitalize">collection</h4>
          <h4 className="text-grey text-sm font-bold capitalize">floor price</h4>
          <h4 className="text-grey text-sm font-bold capitalize">volume</h4>
          </div>
          <div className="flex flex-wrap justify-between flex-1">
          <h4 className="text-grey font-bold capitalize">collection</h4>
          <h4 className="text-grey font-bold capitalize">floor price</h4>
          <h4 className="text-grey font-bold capitalize">volume</h4>
          </div>
        </div>
        <div className=" md:px-0 px-2">
          <div className=" rounded-lg p-3">
            {data.map((data, index) => {
              return (
                <>
                  <div className="flex  flex-wrap  md:flex-nowrap items-center gap-[20px] md:gap-[50px] my-10 md:my-3 px-2 hover:bg-grey hover:rounded-lg">
                    <div className="flex flex-1  gap-5 items-center justify-center">
                    <div className="text-gray text-sm">{data.id}</div>
                    <img src="/assets/profile1.png" class="mx-auto mt-2 mb-2 md:mx-0 mt-[-16px] w-20 h-20"/>
                      <h2 className="font-bold capitalize text-sm">
                        {data.name}
                      </h2>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-bold capitalize text-sm ml-0 md:ml-[2em]">
                        {data.volume}{" "}
                      </h2>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-bold capitalize text-sm ml-0 md:ml-[2em]">
                        {data.floor_price}
                      </h2>
                    </div>
                 
                    <div className="flex flex-1  gap-5 items-center justify-center">
                    <img src="/assets/profile1.png " class="mx-auto md:mx-0 mt-[-16px]  w-20 h-20"/>
                      <h2 className="font-bold capitalize text-sm">
                        {data.name}
                      </h2>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-bold capitalize text-sm ml-0 md:ml-[3.8em]">
                        {data.volume}{" "}
                      </h2>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-bold capitalize text-sm ml-0 md:ml-[4em]">
                        {data.floor_price}
                      </h2>
                    </div>
                 
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
   </div>
  </div>

  // <Tabs defaultActiveKey="1">
  //   <Tabs.TabPane tab="Tab 1" key="1" style={{backgroundColor:'red!important'}}>
  //     Content of Tab Pane 1
  //   </Tabs.TabPane>
  //   <Tabs.TabPane tab="Tab 2" key="2">
  //     Content of Tab Pane 2
  //   </Tabs.TabPane>
  //   <Tabs.TabPane tab="Tab 3" key="3">
  //     Content of Tab Pane 3
  //   </Tabs.TabPane>
  // </Tabs>


  // ) 
  )

};
export default HeroSection;



const data = [
  {
    id:1,
    collectImg: "./assets/collect-img.png",
    name: "Art Gobbler",
    collectImg2: "./assets/coll.png",
    volume: "393.3k ETH ",
    floor_price: "0.039 ETH",
  },
  {
    id:2,
    collectImg: "./assets/collect-img.png",
    name: "Art Gobbler",
    collectImg2: "./assets/coll.png",
    volume: "393.3k ETH ",
    floor_price: "0.039 ETH",
  },
  {
    id:3,
    collectImg: "./assets/collect-img.png",
    name: "Art Gobbler",
    collectImg2: "./assets/coll.png",
    volume: "393.3k ETH ",
    floor_price: "0.039 ETH",
  },
  
];
