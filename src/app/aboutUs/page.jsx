import React from "react";
import { navbar as Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

const dev = [
  {
    name: "Hieronimus Bonfillo",
    role: "Co-Founder / CEO",
    image: "/assets/images/dev/bandar.jpg",
    github: "https://github.com/Bandar-Tsuki",
  },
  {
    name: "Nabil Fauzan Ramadhan",
    role: "Co-Founder / CEO",
    image: "/assets/images/dev/badudu.jpg",
    github: "https://github.com/Despoka",
  },
  {
    name: "M. Dzakwan Rauhillah",
    role: "Co-Founder / CEO",
    image: "/assets/images/dev/jaki.jpg",
    github: "https://github.com/waan03",
  },
];

const page = () => {
  return (
<<<<<<< HEAD
    <div>
    <Navbar/>
    <div className='h-screen bg-white flex justify-center items-center '>
        <div className='flex w-fit px-80 justify-center items-center'>
          <div className='flex flex-col pr-10 '>
=======
    <>
      <Navbar />
      <div className="h-screen bg-white flex justify-center items-center ">
        <div className="flex w-fit px-80 justify-center items-center">
          <div className="flex flex-col pr-10 ">
>>>>>>> jeki
            <Image
              src="/assets/images/LogoDark.svg"
              alt="Logo"
              width={300}
              height={300}
            />
            <p className="text-[#15141F] text-4xl flex">Lorem Ipsum</p>
          </div>
          <div className="w-96 border-l-4 border-[#15141F]">
            <p className="text-black px-8 ">
              Lorem ipsum dolor sit amet consectetur. Dolor vestibulum leo nec
              massa nulla magna. Adipiscing aliquet mattis sed elementum erat
              nascetur tellus turpis. Consequat convallis nisl tellus ornare
              tortor feugiat enim urna hendrerit. Diam mi diam commodo volutpat
              lectus est. A vitae morbi vitae vulputate lorem vitae ultricies
              at. Ut egestas diam tellus fringilla duis cras. At ullamcorper
              molestie ipsum amet est diam bibendum. Euismod faucibus iaculis
              convallis eu dolor mauris quis rutrum ac. Consectetur interdum
              gravida vitae lacus cras. Leo sodales eget ultrices tristique
              accumsan pharetra sit id. Aliquam eget enim eu sem est nisl at
              lacinia cursus.
            </p>
          </div>
        </div>
<<<<<<< HEAD
    </div>
    <Footer/>
    </div>
  )
}
=======
      </div>
      <div className="flex justify-center items-center bg-white w-full pb-8">
        <ul role="list" className="flex gap-x-8 overflow-x-auto">
          {dev.map((person) => (
            <li key={person.name} className="flex-shrink-0 gap-x-8">
              <div className="flex flex-col items-center gap-y-2 ">
                <img
                  className="h-20 w-20 rounded-full"
                  src={person.image}
                  alt="dev"
                />
                <div className="text-center">
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                  <a
                    className="flex justify-center items-center pt-2"
                    href={person.github}
                  >
                    <FaGithub size={30} color="15141F" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
>>>>>>> jeki

      <Footer />
    </>
  );
};

export default page;
