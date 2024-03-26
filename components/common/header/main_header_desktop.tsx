"use client";

import { useState } from "react";
import { MdSearch, MdFavoriteBorder } from "react-icons/md";
import SubHeaderDesktop from "./sub_header_desktop";
import { HoveredDto } from "./header.dto";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbShoppingCartCheck } from "react-icons/tb";
import SearchHeader from "./search/search_header";
import { usePathname } from "next/navigation";

export default function MainHeaderDesktop() {
  const location = usePathname();

  const isHome = location === "/";

  const [hovered, setHovered] = useState<HoveredDto>({
    name: "category",
    hovered: false,
  });
  const [search, setSearch] = useState(false);
  return (
    <nav className="hidden lg:flex w-full px-16 py-4 justify-center items-center text-sm font-semibold relative">
      <div className="flex gap-x-4 items-center">
        <a
          href="/"
          className=""
          onMouseEnter={() => {
            setHovered({
              name: "category",
              hovered: true,
            });
          }}
        >
          Category
        </a>
        <a
          href="/"
          className=""
          onMouseEnter={() => {
            setHovered({
              name: "laptops",
              hovered: true,
            });
          }}
        >
          Laptops By Brand
        </a>
        <a
          href="/"
          className=""
          onMouseEnter={() => {
            setHovered({
              name: "accessories",
              hovered: true,
            });
          }}
        >
          Accessories
        </a>
        <a
          href="/"
          className=""
          onMouseEnter={() => {
            setHovered({
              name: "gaming",
              hovered: true,
            });
          }}
        >
          Gaming
        </a>
        {/* <a href="/" className="">
          About
        </a> */}
      </div>
      <div className="logo mx-auto">
        <a href="/" className="font-bold text-2xl">
          Tech Nexa
        </a>
      </div>
      <div className="flex gap-x-4 items-center">
        {!isHome && (
          <button
            className="flex gap-x-1 items-center"
            onClick={() => {
              setSearch(true);
            }}
          >
            <MdSearch size={20} />
            <p>Search</p>
          </button>
        )}
        <button className="flex gap-x-1 items-center">
          <TbShoppingCartCheck size={18} />
          <p>Cart</p>
        </button>
        <button className="flex gap-x-1 items-center">
          <MdFavoriteBorder size={18} />
          <p>Wishlist</p>
        </button>
        <button className="flex gap-x-1 items-center">
          <FaRegCircleUser size={18} />
          <p>Profile</p>
        </button>
      </div>
      <SubHeaderDesktop hovered={hovered} setHovered={setHovered} />
      <SearchHeader search={search} setSearch={setSearch} />
    </nav>
  );
}
