import Image from "next/image";
import { IoSearch } from "react-icons/io5";

export default function SearchBanner() {
  return (
    <div className="absolute -translate-y-10 w-full h-full flex flex-col justify-center items-center gap-y-10 z-[30] pointer-events-none">
      <div className="w-full flex justify-center items-center relative">
        <span className="pointer-events-auto w-fit absolute -translate-y-12 z-[1]">
          {/* <h1 className="text-6xl sm:text-8xl font-bold text-primary relative z-[1]">
            Tech Nexa
          </h1> */}
          <Image
            src={"/logo1.png"}
            width={300}
            height={240}
            alt="Nexa Logo"
            className="relative z-[1]"
          />
          {/* <p className="text-white">One of the finest tech shops.</p> */}
        </span>
        <div className="bg-radial-gradient-sm sm:bg-radial-gradient w-[80vw] sm:w-[60vw] h-[50vh] absolute -top-[25vh] opacity-85 pointer-events-none -translate-y-16"></div>
      </div>
      <div className="w-fit p-1 sm:p-1.5 bg-slate-200 self-center bg-gradient-to-r from-[#45abfd] from-20% via-orange-600 to-purple-400 rounded-xl shadow-xl z-[1] pointer-events-auto">
        <div className="flex flex-col justify-center items-center relative">
          <input
            type="text"
            placeholder="Search for products"
            className="w-[78vw] sm:w-[30vw] 2xl:w-[30vw] p-2 pl-10 text-primary rounded-md focus:outline-none border-0 bg-gray-100"
          />
          <span>
            <IoSearch size={24} className="absolute left-2 top-2" />
          </span>
          {/* <button className="w-24 h-8 bg-black text-white">Search</button> */}
        </div>
      </div>
    </div>
  );
}
