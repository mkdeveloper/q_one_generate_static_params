import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 h-20 bg-black/25">
      <Link href={"/"}>Home</Link>
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
};

export default Navbar;
