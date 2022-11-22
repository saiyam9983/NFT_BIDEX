import React from "react";
import { Button } from "../../../components/Button/Primary";
import Question from "./Question";
// import Slider from "react-slick";
const CreatorSection = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    margin: 20,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1.5,
          infinite: true,

          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const CreatorData = [
    {
      creatorImg: "./assets/creator1.png",
      profileImg: "./assets/profile1.png",
      Name: "john wick",
      para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      creatorImg: "./assets/creator2.png",
      profileImg: "./assets/profile2.png",
      Name: "john wick",
      para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },

    {
      creatorImg: "./assets/creator3.png",
      profileImg: "./assets/profile3.png",
      Name: "john wick",
      para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      creatorImg: "./assets/creator1.png",
      profileImg: "./assets/profile1.png",
      Name: "john wick",
      para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div>
      <section className="creator-sec  rounded-lg py-[3rem]">
        <div className=" max-w-[400px] w-full mx-auto text-center  pb-5">
          <h2 className="capitalize text-2xl font-black text-center pb-2 ">
            top creator
          </h2>
          <p className="text-base text-violet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="max-w-[1500px] w-full mx-auto px-[40px] rounded-lg">
          <div className="flex justify-center items-center flex-col md:flex-row gap-5">
            {CreatorData.map((data, index) => {
              return (
                <>
                  <div className="w-full border rounded-xl bg-white  shadow-lg ">
                    <div>
                      <img
                        src={process.env.PUBLIC_URL + data.creatorImg}
                        className="w-full  rounded-t-xl "
                      />
                    </div>

                    <div className="bg-white px-4 py-10 text-center rounded-b-xl">
                      <div className="justify-center items-center ">
                        <img
                          src={process.env.PUBLIC_URL + data.profileImg}
                          className="  rounded-full w-full mx-auto mt-[-5rem] max-w-[100px] "
                        />
                      </div>
                      <div className="pt-5 pb-5">
                        <h4 className="font-bold capitalize text-xl">
                          {data.Name}
                        </h4>
                        <p className="font-semibold w-full ">{data.para}</p>

                        <Button title={"+ follow "}></Button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <Question />

          <div className="text-white text-center bg p-[2rem] mt-5 rounded-lg">
            <h3 className="text-white text-3xl max-w-[350px] mx-auto">
              Get ready to collect our NFT
            </h3>
            <button className="capitalize text-xl mt-3 bg-grey rounded-lg p-2">
              get started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatorSection;
