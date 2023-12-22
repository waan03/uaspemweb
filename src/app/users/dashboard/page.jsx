import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/asdhj/Navbar"
import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()

    return (
        <>
        <Navbar/>
        <div className="h-screen bg-white mt-8 text-color-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold text-black">Welcome, {user?.name}</h5>
            <Image src={user?.image} alt="..." width={250} height={250}/>
            <div className="flex flex-wrap gap-4 py-8">
                <Link 
                    href="/users/dashboard/collection"
                    className=" text-black font-bold px-4 py-3 text-xl"
                >
                    My List
                </Link>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Page