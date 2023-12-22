"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import InputSearch from "./InputSearch";
import React from 'react'
import UserActionButton from "./UserActionButton";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "My List", href: "/users/dashboard/collection", current: false },
  { name: "About Us", href: "/aboutUs", current: false },
  {name: "Profile", href:"/users/dashboard", current: false},
  {name: "Log Out", href:"/api/auth/signout", current:false},
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <header className="sticky top-0 z-30 w-full p-0 shadow drop-shadow flex ">
        <div className="bg-[#15141F] w-full p-0 h-auto z-40">
          <div className="py-8 pl-32 flex justify-between items-center">
            <div>
              <a href="#">
                <img
                  src="/assets/images/logo.svg"
                  width={150}
                  height={150}
                  alt="assets circle left"
                />
              </a>
            </div>
            <div className="w-max">
              <div className="ml-10 flex  items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key="{item}"
                    href={item.href}
                    className={pathname == "/" ? "active" : ""}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <InputSearch />
            <div></div>
            {/* <UserActionButton /> */}
            {/* <div className="bg-white w-64 h-14 py-8 flex items-center rounded-l-full">
              <a href="/user">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                  <FaUser color="15141F" size={30} />
                </div>
              </a>

              <div className="pl-2 py-0">
                <p className="text-[#15141F] font-bold">USER</p>
                <p className="text-[#15141F]">??</p>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar