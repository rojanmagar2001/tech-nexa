import { IoSearch } from "react-icons/io5";

export default function SearchBanner() {
  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center gap-y-10 z-[30] pointer-events-none">
      <div className="w-full flex justify-center items-center relative">
        <span className="pointer-events-auto w-fit">
          <h1 className="text-8xl font-bold text-primary relative z-[1]">
            Tech Nexa
          </h1>
          {/* <p className="text-white">One of the finest tech shops.</p> */}
        </span>
        <div className="bg-radial-gradient w-[60vw] h-[50vh] absolute -top-[25vh] opacity-80 pointer-events-none"></div>
      </div>
      <div className="w-fit p-3 bg-slate-200 self-center bg-gradient-to-r from-slate-200 to-slate-300 rounded-xl shadow-xl z-[1] pointer-events-auto">
        <div className="flex flex-col justify-center items-center relative">
          <input
            type="text"
            placeholder="Search for products"
            className="w-[40vw] p-2 pl-10 text-primary rounded-md focus:outline-none border-0 "
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
