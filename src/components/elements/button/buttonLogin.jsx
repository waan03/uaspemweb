"use client";
import React from "react";
import Link from "next/link";

const buttonLogin = () => {
  return (
    <div>
      <Link
        href="/home"
        className="p-2 px-32 rounded-md bg-[#00AFB9] text-center justify-center font-bold"
      >
        Login
      </Link>
    </div>
  );
};

export default buttonLogin;
