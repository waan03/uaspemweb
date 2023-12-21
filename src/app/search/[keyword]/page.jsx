import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { navbar as Navbar } from "@/components/Navbar/Navbar";
import Footer  from "@/components/Footer/Footer";

const Page = async ({ params }) => {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
    <div className="bg-white">
      <Navbar />
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
      <Footer/>
    </div>
      
    </>
  );
};

export default Page;
