import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email },
    });

    return (
        <>
        <Navbar/>
        <section className="mt-4 px-4 w-full h-150 bg-white">
            <Header title={"My Collection"} />
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {collection.map((collect, index) => {
                    return (
                        <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative border-2 border-color-accent">
                            <Image
                                src={collect.anime_image}
                                alt={collect.anime_image}
                                width={550}
                                height={100}
                                className=""
                            />
                            <div className="absolute flex items-center justify-center bottom-0 w-full bg-white h-20">
                                <h5 className="text-xl text-center text-black">{collect.anime_title}</h5>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
        <Footer/>
        </>
        
    );
};

export default Page;
