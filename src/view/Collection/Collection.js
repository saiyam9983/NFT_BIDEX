import React from "react";
import { Link } from "react-router-dom";
import { SearchComponent } from "../../components/Header/Header";

const Collection = () => {
  const data = [
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
    {
      collectImg: "./assets/collect-img.png",
      name: "Art Gobbler",
      collectImg2: "./assets/coll.png",
      volume: "393.3k ETH ",
      floor_price: "0.039 ETH",
    },
  ];
  return (
    <div>
      <div className="max-w-[1500px] mx-auto pt-5 md:pt-[2rem] px-2">
        <div className="flex justify-center items-center gap-[20px] md:px-0 px-2">
          <div className="border bg-cyan p-2 rounded-lg px-5">
            <button className="capitalize text-lg text-[#7F00FF] "> {"<"} filter </button>
          </div>

          <div className="flex-1">
            <SearchComponent />
          </div>
        </div>
        <div className="flex pt-5  pb-5 gap-[20px] md:gap-[150px] md:px-0 px-2">
          <h4 className="text-grey font-bold capitalize">collection</h4>
          <h4 className="text-grey font-bold capitalize">all the volume</h4>
          <h4 className="text-grey font-bold capitalize">floor price</h4>
        </div>
        <div className=" md:px-0 px-2">
        <Link to="/explore/usercollection">
          <div className=" border rounded-lg p-3">
            {data.map((data, index) => {
              return (
                <>
                  <div className="flex  flex-wrap  md:flex-nowrap items-center gap-[20px] md:gap-[50px] my-10 md:my-3 px-2 hover:bg-grey hover:rounded-lg">
                    <div className="flex  gap-5 items-center justify-center">
                    <img src="/assets/collimg.png" class="mx-auto md:mx-0 mt-[-16px]"/>
                      <h2 className="font-bold capitalize text-sm">
                        {data.name}
                      </h2>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-bold capitalize text-sm ml-0 md:ml-[4em]">
                        {data.volume}{" "}
                      </h2>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-bold capitalize text-sm ml-0 md:ml-[4em]">
                        {data.floor_price}
                      </h2>
                    </div>
                    <img src="/assets/coll.png" class="mx-auto md:mx-0 mt-[-16px]"/>
                  </div>
                </>
              );
            })}
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Collection;
