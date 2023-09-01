import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const LandingNavBar = () => {
  const { logOut, user } = useUserAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    if (nav) {
      setNav(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="border-zinc-500  z-10 flex h-20 w-full items-center justify-between border-b bg-white px-4 text-white lg:px-20">
      <div className="flex items-center gap-8">
        <div className="flex items-end gap-1">
          <h1 className=" text-3xl font-bold text-[#FFAF20]">Tabaani</h1>
          <h1 className=" text-2xl font-bold text-[#000000]">ACADEMY</h1>
        </div>
        <ul className="hidden md:flex">
          <li className="cursor-pointer px-4 font-medium capitalize text-gray-500 duration-200 hover:scale-105">
            <Link to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer px-4 font-medium capitalize text-gray-500 duration-200 hover:scale-105">
            <Link to="about" smooth duration={500}>
              About
            </Link>
          </li>
          <li className="cursor-pointer px-4 font-medium capitalize text-gray-500 duration-200 hover:scale-105">
            <Link to="contact" smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="relative hidden md:block lg:block">
          <button onClick={toggleDropdown}>
            <img
              className="h-10 w-10 rounded-full bg-gray-400"
              src={user.photoURL}
              alt="photo"
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-12 right-0 w-56 rounded-lg bg-white shadow-md">
              <div className="p-4">
                <p className="text-sm font-bold text-[#000000]">
                  👋 Hey, {user.displayName}
                </p>
              </div>
              <div className="h-px w-full bg-gray-300" />
              <div className="flex flex-col px-4 py-2">
                <button
                  className="mt-3 text-left font-medium text-red-500 hover:text-red-700"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="hidden gap-4 md:flex">
          <button className="cursor-pointer font-medium capitalize text-gray-500 duration-200 hover:scale-105 hover:text-orange-500">
            <a href="/auth/sign-in">Login</a>
          </button>

          <button className="rounded-3xl bg-orange-400 px-4 py-2 font-medium text-[#000000] duration-200 hover:scale-105">
            <a href="/auth/sign-up"> Sign up</a>
          </button>
        </div>
      )}

      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-white text-gray-500">
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={handleLinkClick} to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={handleLinkClick} to="about" smooth duration={500}>
              About
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={handleLinkClick} to="contact" smooth duration={500}>
              Contact
            </Link>
          </li>
          {user ? (
            <>
              <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
                <Link
                  onClick={handleLinkClick}
                  to="profile"
                  smooth
                  duration={500}
                >
                  Profile
                </Link>
              </li>
              <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
                <button
                  className="cursor-pointer px-4 py-2 font-medium text-red-500 hover:text-red-700"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
                <Link
                  onClick={handleLinkClick}
                  to="signup"
                  smooth
                  duration={500}
                >
                  Sign up
                </Link>
              </li>
              <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
                <Link
                  onClick={handleLinkClick}
                  to="login"
                  smooth
                  duration={500}
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default LandingNavBar;
