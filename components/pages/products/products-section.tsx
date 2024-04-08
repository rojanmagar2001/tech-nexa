import React from "react";
import products from "@/data/products.json";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MdDiscount } from "react-icons/md";
import { ChatModalStore } from "@/hooks/products/use-chat-modal";

interface ProductsSectionProps {
  chatModal: ChatModalStore;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ chatModal }) => {
  return (
    <section
      className={cn(
        "flex flex-col p-3",
        chatModal.isOpen && !chatModal.small && "w-[75%] bg-card"
      )}
    >
      <div
        className={cn(
          "grid gap-4",
          chatModal.isOpen && !chatModal.small // when chat modal is open and not small
            ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        )}
      >
        {products.products.map((item, index) => (
          <div key={index} className="flex flex-col gap-y-2 h-[260px]">
            <div className="relative">
              <Image
                src={item.images[0]}
                alt={item.title}
                width={300}
                height={300}
                className="h-[225px] object-cover rounded-lg bg-gray-300"
              />
              <div className="absolute top-1 left-1 bg-red-500 text-white p-1 text-[8px] rounded-md flex justify-center gap-x-0.5 items-center">
                <MdDiscount
                  size={12}
                  className="!stroke-white !fill-white"
                  color="white"
                />
                <p className="text-white tracking-tight">
                  {item.discountPercentage}%
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm">{item.title}</h3>
              <p className="text-sm text-red-400">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
