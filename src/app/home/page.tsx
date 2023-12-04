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
            <Image
                src="/assets/images/KNYhome.jpg"
                className="blur "
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '120%', height: '10%' }} // optional
                alt="Kimetsu No Yaiba"
            />
      </div>
      <Footer />
    </>
  );
}