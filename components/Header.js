import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import {
  HiOutlineSearch,
  HiOutlineHome,
  HiOutlineFlag,
  HiOutlinePlay,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
  HiOutlineViewGrid,
  HiOutlineChat,
  HiOutlineBell,
  HiOutlineChevronDown,
} from "react-icons/hi";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky min-w-max space-x-5 top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex space-x-5">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt="logo"
        />
        <div className="flex items-center bg-gray-100 rounded-full p-2 space-x-2">
          <label htmlFor="search">
            <HiOutlineSearch className="text-2xl text-gray-600 cursor-pointer" />
          </label>
          <input
            id="search"
            className="hidden md:inline-flex flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex items-center space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HiOutlineHome} />
          <HeaderIcon Icon={HiOutlineFlag} />
          <HeaderIcon Icon={HiOutlinePlay} />
          <HeaderIcon Icon={HiOutlineShoppingCart} />
          <HeaderIcon Icon={HiOutlineUserGroup} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile pic */}
        <Image
          onClick={() => signOut()}
          className="cursor-pointer rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt="profile pic"
        />

        <p className="font-semibold pr-3 whitespace-nowrap">
          {session.user.name}
        </p>

        <HiOutlineViewGrid className="icon" />
        <HiOutlineChat className="icon" />
        <HiOutlineBell className="icon" />
        <HiOutlineChevronDown className="icon" />
      </div>
    </div>
  );
};

export default Header;
