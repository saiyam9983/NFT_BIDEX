import { Button } from "../../../components/Button/Primary";

export const AboutSection = () => {
  return (
    <div>
      <section className="about-sec pt-[3rem]  ">
        <div className=" max-w-[400px] w-full mx-auto text-center  pb-5">
          <h2 className="capitalize text-2xl  text-black font-black text-center pb-2 ">
            About us
          </h2>
          <p
            className="text-base
           text-violet"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" ">
          <div className="max-w-[1200px] mx-auto w-full px-[40px] py-[3rem]">
            <div className="flex flex-col md:flex-row justify-center  gap-[30px]">
              <div className="flex-1 pb-5">
                <img
                  src={process.env.PUBLIC_URL + "./assets/about.png"}
                  className="max-w-[450px] w-full rounded-lg md:mx-0  mx-auto"
                />
              </div>
              <div className="flex-1 pb-5">
                <h4 className="text-xl font-black text-black capitalize pb-5">
                  Get Popular NFT
                </h4>
                <p className="pb-5 leading-8 text-[#57466B] text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar.lectus. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Praesent auctor purus luctus enim
                  egestas, ac scelerisque ante pulvinar.{" "}
                </p>

                <Button title={"Show More"}></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
