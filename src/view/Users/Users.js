import React from "react";
import { SearchComponent } from "../../components/Header/Header";
import { Link } from "react-router-dom";
const Users = () => {
  const data = [
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
    {
      imgUrl: "/assets/users.png",
      title: "YFI Fan",
      para: "26k followers",
    },
  ];
  return (
    <div>
      <div className="max-w-[1500px] mx-auto pt-5 md:pt-[2rem]">
        <div className="flex justify-center items-center gap-[20px] md:px-0 px-2">
          <div className="flex-1">
            <SearchComponent placeholder={"users"} />
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 px-2 justify-center items-center  mt-10">
          {data.map((data, index) => {
            return (
              <>
                <Link to="/users/userpage">
                  <div className="border rounded-lg p-3 max-w-[400px] mx-auto ">
                    <div>
                      
                      <img
                        src={process.env.PUBLIC_URL + data.imgUrl}
                        className="w-full"
                      />
                    </div>
                    <div className="px-2 pt-4 flex gap-[50px]  justify-between  items-center ">
                      <div>
                        <h3 className="text-lg text-black">{data.title} </h3>
                        <p className="text-grey capitalize text-lg">
                          {data.para}
                        </p>
                      </div>
                      <button className="bg-[#7F00FF] text-white rounded-lg md:px-2 px-5  py-3 md:py-2  text-lg capitalize">
                        follow
                      </button>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
