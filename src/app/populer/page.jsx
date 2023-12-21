"use client"

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async() => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(populerAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])

<<<<<<< HEAD
const page = () => {
  return (
    <div>page</div>
  )
}

export default page
=======
  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`}/>
      <AnimeList api={topAnime}/>
      <Pagination 
      page={page} 
      lastPage={topAnime.pagination?.last_visible_page}
      setPage={setPage}
      />
    </>
  );
};

export default Page;
>>>>>>> 5563495fbdb582855e28429d8573a666c6c1d3db
