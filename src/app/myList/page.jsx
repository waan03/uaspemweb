"use client";
import React from "react";
import { navbar as Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-white">
        <div className="p-20 text-black flex  ">
          <p className="font-bold text-4xl pl-12">MY ANIME LIST</p>
          <p className="text-4xl pl-16">MY WISHLIST</p>
        </div>

        {/* ITEMS */}
        <div className="pl-32 flex items-center flex-col ">
          <div className="flex items-center">
            <div className="pr-8">
              <p className="text-4xl text-black ">1</p>
            </div>
            <div className="flex items-center border-l-4 border-lime-600">
              <div className="flex absolute flex-col pl-6">
                <p className="flex text-black text-xl font-bold">
                  KIMETSU NO YAIBA
                </p>
                <p className="flex  text-black">鬼滅の刃</p>
              </div>
              <Image
                src="/assets/images/About/Mask group.png"
                width={0}
                height={0}
                sizes="200vw"
                style={{ width: "100%", height: "10%" }}
                alt="kimetsuNoYaiba"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
