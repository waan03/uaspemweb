"use client";
import ButtonLogin from "@/components/elements/button/buttonLogin";
import Image from "next/image";
import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-3 h-screen w-full bg-[url(/assets/images/Login/Background.png)] bg-no-repeat">
        <div className="flex justify-end items-center ">
          <Image
            src="/assets/images/Login/anilistLogo.png"
            alt="logo anilist"
            width={300} // specify the width
            height={300}
          />
        </div>
        <div></div>

        <div className=" flex items-center flex-col  justify-center ">
          <div className="p-16 bg-white rounded-xl border-8 border-[#FED9B7]">
            <h1 className="text-4xl font-bold text-black">Login</h1>
            <p className="text-black">Masukan email dan password Anda</p>
            <form className="max-w-full mx-auto">
              <div className="pt-8">
                <div className="">
                  <input
                    className="text-black peer bg-transparent border-2 border-BorderPrimaryColor hover:border-black transition ease-in-out duration-200 rounded-md w-full py-2 px-4"
                    type="email"
                    placeholder="Email"
                  />
                  <p className="mt-2 invisible peer-invalid:visible text-red-500 text-sm pb-1 pl-1">
                    Masukan email yang valid
                  </p>
                </div>
                <div className="mb-6">
                  <input
                    className="text-black bg-transparent border-2 border-BorderPrimaryColor hover:border-black transition ease-in-out duration-200 rounded-md w-full py-2 px-4"
                    type="password"
                    placeholder="Kata Sandi"
                  />
                </div>
                <ButtonLogin />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
