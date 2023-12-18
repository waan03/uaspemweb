import { navbar as Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import React from "react";

const user = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-white ">
        <span className="m-10">
          <div className="bg-black flex justify-center m-10 h-5 items-center p-10 rounded-xl ">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1">
                <p>TESTO</p>
              </div>
              <div className="col-end-7">
                <p>clas</p>
              </div>
            </div>
          </div>
        </span>
      </div>
      <Footer />
    </>
  );
};

export default user;
