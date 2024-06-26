import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="flex flex-col justify-center relative">
      <input
        type="text"
        placeholder="Search for products"
        className="w-[78vw] sm:w-[30vw] 2xl:w-[30vw] p-2 pl-10 text-primary rounded-md focus:outline-none border-0 bg-gray-100"
      />
      <span className="text-white absolute left-2 !stroke-slate-300">
        <IoSearch size={20} className="" />
      </span>
      {/* <button className="w-24 h-8 bg-black text-white">Search</button> */}
    </div>
  );
};

export default SearchInput;
