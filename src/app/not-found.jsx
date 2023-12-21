import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white items-center justify-center h-screen flex static flex-col ">
      <h1 className="text-[15rem] leading-none font-bold text-[#15141F] pb-24">404</h1>
      <div className="text-black flex">
        <h2>Not Found</h2>
      </div>
      <div className="text-black flex">
        <p>Could not find requested resource</p>
      </div>
      <img
        src="/assets/images/404/404.png"
        width={0}
        height={0}
        sizes=""
        style={{ width: "20%", height: "30%" }}
        alt="404"
      />
      <div className="">
        <Link className="border-black border rounded-lg bg-black p-2 px-8" href="/">Return Home</Link>
      </div>
    </div>
  );
}
