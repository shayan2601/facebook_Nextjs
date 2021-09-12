import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  GiftIcon,
  HomeIcon,
  MenuIcon,
  PresentationChartLineIcon,
  SearchIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/client";

const Header = () => {
  const [session] = useSession();

  return (
    <header className="bg-gray-100 shadow-md px-2 py-2 flex items-center justify-between ">
      <div className="flex items-center">
        <Image
          layout="fixed"
          height={40}
          width={40}
          src="https://links.papareact.com/5me"
        />
        <div className="rounded-full focus-within:shadow-md bg-gray-200 flex py-2 px-2 ml-3">
          <SearchIcon className="h-6" />
          <input
            className="bg-transparent flex-grow outline-none mx-1 hidden lg:inline-flex"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex items-center xl:space-x-4 space-x-1">
        <div className="hover:bg-gray-200 hover:rounded-md hover:px-8 lg:px-8 px-4 cursor-pointer">
          <HomeIcon className="w-8 text-gray-500  py-2" />
        </div>
        <div className="hover:bg-gray-200 hover:rounded-md hover:px-8 lg:px-8 px-4 cursor-pointer">
          <UsersIcon className="w-8 text-gray-500   py-2" />
        </div>
        <div className="hover:bg-gray-200 hover:rounded-md  hover:px-8 lg:px-8 px-4 cursor-pointer">
          <PresentationChartLineIcon className="w-8 text-gray-500   py-2" />
        </div>
        <div className="hover:bg-gray-200 hover:rounded-md hover:px-8 lg:px-8 px-4 cursor-pointer">
          <UserGroupIcon className="w-8 text-gray-500   py-2" />
        </div>
        <div className="hover:bg-gray-200 hover:rounded-md  hover:px-8 lg:px-8 px-4 cursor-pointer">
          <GiftIcon className="w-8 text-gray-500   py-2" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center hover:bg-gray-300 hover:rounded-full pr-2 space-x-2">
          <img
            onClick={() => signOut()}
            className="h-10 object-contain rounded-full cursor-pointer"
            src={session?.user.image}
          />
          <p className="font-bold text-lg hidden lg:inline-flex whitespace-nowrap  w-20 overflow-hidden">
            {session?.user.name}
          </p>
        </div>

        <div className="flex items-center ml-3 space-x-3 ">
          <MenuIcon className="h-10 text-gray-500 hover:bg-gray-300 hover:rounded-full bg-gray-200 rounded-full p-2 cursor-pointer" />
          <ChatIcon className="h-10 text-gray-500 hover:bg-gray-300 hover:rounded-full bg-gray-200 rounded-full p-2 cursor-pointer" />
          <BellIcon className="h-10 text-gray-500 hover:bg-gray-300 hover:rounded-full bg-gray-200 rounded-full p-2 cursor-pointer" />
          <ChevronDownIcon className="h-10 cursor-pointer text-gray-500 hover:bg-gray-300 hover:rounded-full bg-gray-200 rounded-full p-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
