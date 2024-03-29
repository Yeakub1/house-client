import Headroom from "react-headroom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/house-hunter-logo.png";
import { getUser, userLogOut } from "../../redux/actions/userActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetails);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const hadnleLogout = () => {
    dispatch(userLogOut());
  };
  return (
    <Headroom>
      <nav className=" max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-2 md:py-3 2xl:py-4 border-b border-neutral-200 shadow sticky top-0 bg-bgColor z-50">
        <div className=" flex flex-row justify-between items-center gap-3 md:gap-0">
          <div className=" flex flex-row gap-2 items-center flex-1">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className=" w-7 md:w-9 2xl:w-20"
                draggable="false"
              />
            </Link>
          </div>
          <div className=" flex flex-row gap-4">
            {user ? (
              <div className=" flex flex-row items-center gap-5">
                <Link
                  to="/dashboard"
                  className=" text-textColor px-3 py-2 hover:bg-secondary opacity-90 rounded-full transition duration-200 cursor-pointer ease-in"
                >
                  Dashboard
                </Link>
                <Link to="/register">
                  <button
                    onClick={hadnleLogout}
                    className=" py-2 px-3 rounded-md bg-primary hover:bg-accent duration-300 transition text-white font-medium"
                  >
                    Log out
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className=" py-2 px-3 rounded-md border border-primary hover:bg-accent hover:text-white duration-300 transition text-textColor font-medium">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
