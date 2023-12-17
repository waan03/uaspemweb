"use client";
import React, { useEffect, useState } from "react";
import { navbar as Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ButtonRead from "@/components/elements/button/buttonRead";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 4);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <img
          src="/assets/images/Home/homepage_1.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "120%", height: "10%" }} // optional
          alt="Kimetsu No Yaiba"
        />
        <div className="absolute text-[#15141F] w-3/5 py-5 grid grid-cols-3 mx-10">
          <div className="grid grid-cols col-span-2 ">
            <div className="py-10 flex-col">
              <p className="text-4xl font-bold">KIMETSU NO YAIBA</p>
              <p>鬼滅の刃</p>
              <p className="pt-5">
                Kimetsu no Yaiba ( terj. har. "Korps Pembasmi Iblis" [4] ), yang
                diterbitkan di Indonesia dengan judul Demon Slayer: Kimetsu no
                Yaiba, adalah sebuah seri manga Jepang yang ditulis dan
                diilustrasikan oleh Koyoharu Gotōge. Ceritanya mengisahkan
                tentang Tanjiro Kamado, seorang anak laki-laki yang menjadi
                pembasmi iblis setelah keluarganya dibantai oleh iblis dan adik
                perempuannya yang bernama Nezuko diubah menjadi iblis.
              </p>
            </div>
            <div>
              <ButtonRead />
            </div>
          </div>
          <div className="">
            <img src="/assets/images/Home/BannerKNY.png" alt="gambar" />
          </div>
        </div>
      </div>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
      <Footer />
    </>
  );
};
export default Page
