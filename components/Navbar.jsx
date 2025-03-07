import Link from "next/link";
import react from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-slate-800">
      <Link className="font-bold text-white" href={"/"}>
        Home
      </Link>
      <Link className="p-2 bg-white rounded-md" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
