import { FaRegFaceSadTear } from "react-icons/fa6";
import { TbError404 } from "react-icons/tb";

const NotFoundPage = () => {
  return (
    <>
      <div className=" flex justify-center pt-10 flex-col items-center gap-5">
        <FaRegFaceSadTear className="text-9xl" />
        <TbError404 className="text-7xl" />
        <h1 className="text-6xl uppercase">not found</h1>
        <p className="uppercase text-2xl">
          The page you are looking for does not exist
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
