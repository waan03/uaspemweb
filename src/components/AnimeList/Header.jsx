import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-between items-center p-4 bg-[#15141F] m-8 mx-32 rounded-xl">
          <h1 className="px-4 text-2xl font-bold text-color-primary">{title}</h1>
          {linkHref && linkTitle ? (
            <Link
              href={linkHref}
              className="md:text-xl text-sm underline hover:text-color-accent text-color-primary transition-all"
            >
              {linkTitle}
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Header;
