export const Button = ({ title }) => {
  return (
    <>
      <button className=" bg-[#7F00FF] bg-no-repeat rounded-lg  text-white  xl:text-lg text-sm px-5 py-2 capitalize  justify-center items-center z-[100]">
        {title}
      </button>
    </>
  );
};
