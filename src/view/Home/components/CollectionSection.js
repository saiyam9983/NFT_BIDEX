import { Tabs } from "antd";
import React, { useState } from "react";
import NFTCard from "../../../components/Cards/NFTCard/NFTCard";
const CollectionSection = () => {
  // const [mode, setMode] = useState("top");
  // const handleModeChange = (e) => {
  //   setMode(e.target.value);
  // };
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
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },

    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },

    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
    {
      url: "https://assets.raribleuserdata.com/prod/v1/image/t_gif_preview/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvYmJsZXJzLmFydGdvYmJsZXJzLmNvbS9naWZzLzUzNjIuZ2lm",
    },
  ];
  return (
    <div>
      <section className="collection-sec pt-[3rem]">
        <div className=" max-w-[400px] w-full mx-auto text-center  pb-5">
          <h2 className="capitalize text-2xl font-black text-center pb-2 ">
            Collection
          </h2>
          <p
            className="text-base
           text-violet"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="">
          <div className="max-w-[1500px] mx-auto w-full px-2 py-[3rem]">
            <div >
            <Tabs
              defaultActiveKey="1"
              centered
              scroll={{ x: true }}
              items={[
                {
                  label: `Art`,
                  key: 1,
                  children: (
                    <div className="flex items-center justify-center flex-col md:flex-row flex-wrap gap-5 pt-5 ">
                      {FakeData.map((item, key) => (
                        <div>
                          <NFTCard key={key} data={item} />
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  label: `Sport`,
                  key: 2,
                  children: (
                    <div className="flex items-center justify-center flex-col md:flex-row flex-wrap  gap-5 pt-5">
                      {FakeData.map((item, key) => (
                        <div>
                          <NFTCard key={key} data={item} />
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  label: `Photography`,
                  key: 3,
                  children: (
                    <div className="flex items-center justify-center gap-5 flex-col flex-wrap md:flex-row pt-5">
                      {FakeData.map((item, key) => (
                        <div>
                          <NFTCard key={key} data={item} />
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  label: `Pattern`,
                  key: 4,
                  children: (
                    <div className="flex items-center justify-center gap-5 flex-col flex-wrap md:flex-row  pt-5">
                      {FakeData.map((item, key) => (
                        <div>
                          <NFTCard key={key} data={item} />
                        </div>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionSection;
