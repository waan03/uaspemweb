"use client"
// import ButtonLogin from "@/components/elements/button/buttonLogin";
import Image from "next/image";
import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  
  return (
    <>
      <div className="grid grid-cols-3 h-screen w-full bg-[url(/assets/images/login/background.png)] bg-no-repeat">
        <div className="bg-SecondaryColor col-span-1 flex items-center border-r-4 border-[#FFC412] p-8">
          <div className="w-full">
            <h1 className="text-4xl font-bold">LOGIN</h1>
            <p className="">Masukan email dan password Anda</p>
            <form className="max-w-full mx-auto">
              <div className="pt-8">
                <div className="">
                  <input className="text-white peer bg-transparent border-2 border-BorderPrimaryColor hover:border-white transition ease-in-out duration-200 rounded-md w-full py-2 px-4"
                    type="email"
                    placeholder="Email"
                  />
                  <p className="mt-2 invisible peer-invalid:visible text-red-500 text-sm pb-1 pl-1">
                    Masukan email yang valid
                  </p>
                </div>
                <div className="mb-6">
                  <input className="text-white bg-transparent border-2 border-BorderPrimaryColor hover:border-white transition ease-in-out duration-200 rounded-md w-full py-2 px-4"
                    type="password"
                    placeholder="Kata Sandi"
                  />
                  <p className="pt-3  ">
                    <input type="checkbox" className="px-2" />
                    <label className="pl-2">Ingat saya </label>
                  </p>
                </div>
                {/* <ButtonLogin /> */}
              </div>
            </form>
          </div>
          {/* <div className="bg-white"> */}
          {/* </div> */}
        </div>
        <div className="flex items-center static w-full">
          <div>
            <Image
              className="w-full"
              src="/assets/images/Login/Backgorund.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "120%", height: "10%" }}
              alt="background"
            />
          </div>
        </div>
      </div>
    </>
  );
}
