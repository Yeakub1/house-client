import { Link } from "react-router-dom";
import errorPic from "../assets/errorIllustration.png";
const NotFoundPage = () => {
  return (
    <div className=" flex flex-col justify-center gap-4 mx-auto max-w-sm items-center mt-5 md:mt-8 lg:py-10">
      <img src={errorPic} alt="" />
      <p className=" text-textColor font-medium text-3xl">Page not found</p>
      <Link>
        <button className=" px-10 py-2 rounded-md text-white font-semibold bg-textColor hover:bg-white hover:text-textColor hover:border hover:border-textColor transition duration-200 ease-in-out">
          Go home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
