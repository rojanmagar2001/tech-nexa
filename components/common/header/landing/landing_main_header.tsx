import Image from "next/image";
import React from "react";
import SearchInput from "../../ui/SearchInput";
import { motion } from "framer-motion";
import { TbShoppingCartCheck } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";

interface LandingMainHeaderProps {
  visible: boolean;
}

const LandingMainHeader: React.FC<LandingMainHeaderProps> = ({ visible }) => {
  return (
    <nav className="px-12 py-4 flex justify-between items-center fixed z-[100] bg-white w-full">
      <Image src="/logo1.png" alt="logo" width={100} height={50} />
      <motion.span
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        animate={
          visible
            ? {
                opacity: 1,
                scale: 1,
              }
            : {
                opacity: 0,
                scale: 0.6,
              }
        }
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <SearchInput />
      </motion.span>
      <div className="flex gap-x-4 items-center">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-gray-100 transition-all duration-100"
        >
          <TbShoppingCartCheck size={30} className="!stroke-gray-700" />
        </Link>
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-gray-100 transition-all duration-100"
        >
          <MdFavoriteBorder size={30} className="!fill-gray-700" />
        </Link>
        <Link
          href="/"
          className="text-sm font-bold p-2 bg-gray-100 hover:bg-gray-300 transition-all duration-100 rounded-md"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default LandingMainHeader;
