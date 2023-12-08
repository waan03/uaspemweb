"use client";
import React from "react";
import { navbar as Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function page() {
  return (
    <>
    <Navbar />
      <div className="flex justify-center items-center">
            <div className="flex absolute bg-white opacity-100 h-screen">
            </div>
            <Image
                src="/assets/images/KNYhome.jpg"
                className="relative blur"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '120%', height: '10%', opacity:0.5, }} // optional
                alt="Kimetsu No Yaiba"
            />
            <div className="absolute text-[#15141F] text-4xl font-bold">
              KIMETSU NO YAIBA
            </div>
      </div>
      <Footer />
    </>
  );
}