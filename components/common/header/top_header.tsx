import { MdMailOutline } from "react-icons/md";

export default function TopHeader() {
  return (
    <div className=" w-full flex justify-center p-2 sm:p-4 text-[12px] items-center border-b-[1px] border-b-gray-200">
      <div className="hidden lg:flex gap-x-4 items-center">
        <button className="flex flex-row gap-x-2 items-center">
          <MdMailOutline size={18} />
          <p className="font-bold">Support</p>
        </button>
        <button className="flex flex-row gap-x-2 items-center">
          <MdMailOutline size={18} />
          <p className="font-bold">Store Location</p>
        </button>
      </div>
      <div className="flex gap-x-2 items-center mx-auto">
        <p>Tech Nexa is one of the finest tech shops.</p>
        <a
          href="/"
          className="font-bold flex flex-col gap-x-[1px] items-center"
        >
          <p>Show all Products</p>
          <span className="w-full h-[1px] bg-black"></span>
        </a>
      </div>
      <div className="hidden lg:flex gap-x-4 items-center font-bold text-[14px]">
        <button className="flex flex-row gap-x-2 items-center">
          <p className="font-bold">English</p>
          <MdMailOutline size={18} />
        </button>
        <button className="flex flex-row gap-x-2 items-center">
          <p className="font-bold">NPR</p>
          <MdMailOutline size={18} />
        </button>
      </div>
    </div>
  );
}
