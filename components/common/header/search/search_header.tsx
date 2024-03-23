import { AnimatePresence, motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import data from "@/data/products.json";
import { useEffect } from "react";
import Image from "next/image";

interface SearchHeaderProps {
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchHeader({ search, setSearch }: SearchHeaderProps) {
  const products = data.products.slice(0, 6);

  useEffect(() => {
    if (search) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [search]);

  return (
    <AnimatePresence>
      {search && (
        <div
          className="w-full absolute -top-10 h-[calc(100vh+2.5rem)] z-[100] bg-primary/40"
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            setSearch(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.stopPropagation();
              setSearch(false);
            }
          }}
        >
          <motion.div
            className="bg-secondary py-20 flex flex-col items-center gap-y-12 cursor-default"
            transition={{ duration: 0.3, ease: "easeOut" }}
            initial={{ opacity: 0, y: -120 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -120 }}
            onClick={(e) => {
              e.stopPropagation();
              setSearch(true);
            }}
          >
            <div className="flex flex-col items-center gap-y-8">
              <h2 className="text-4xl">What are you looking for?</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-[50vw] px-4 py-3 text-primary focus:outline-none border-[1px] text-xl font-light border-gray-600 rounded-2xl"
                />
                <IoSearch
                  size={30}
                  className="absolute top-3 right-4 fill-gray-400"
                />
              </div>
              <div className="flex self-center items-center gap-x-4 text-2xl">
                <h3 className=" font-medium text-primary">Quick Search:</h3>
                <ul className="flex gap-x-2 font-normal text-lg">
                  <li>
                    <a href="/" className="text-gray-500 hover:text-primary">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-500 hover:text-primary">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-500 hover:text-primary">
                      Headphones
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-500 hover:text-primary">
                      Cameras
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-20 flex flex-col gap-y-8">
              <h3 className="text-3xl text-primary">Popular Products</h3>
              <div className="grid grid-cols-6 gap-x-8 gap-y-12">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col items-center gap-y-4 rounded-lg"
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width={160}
                      height={160}
                      className="w-40 h-40 object-cover"
                    />
                    <div className="flex flex-col gap-y-2">
                      <h4 className="text-base font-light text-primary capitalize">
                        {product.title}
                      </h4>
                      <p className="text-gray-500 font-light">
                        Price: {product.price}$
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
