"use client";
import React from "react";
import Link from "next/link";

const buttonLogin = () => {
  return (
    <div className="px-8 p-2 rounded-md bg-red-700 text-center justify-center ">
      <Link href="/home">ButtonLogin</Link>
    </div>
  );
};

export default buttonLogin;
