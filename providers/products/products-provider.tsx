"use client";
import ProductsSection from "@/components/pages/products/products-section";
import useChatModal from "@/hooks/products/use-chat-modal";
import { cn } from "@/lib/utils";
import ChatModal from "@/modals/products/chat-modal";
import React from "react";

const ProductsProvider = () => {
  const modal = useChatModal();
  return (
    <div
      className={cn(
        `flex gap-x-2 px-4 py-2 relative h-full`,
        modal.isOpen && !modal.small && "bg-foreground"
      )}
    >
      <ProductsSection chatModal={modal} />
      <ChatModal chatModal={modal} />
    </div>
  );
};

export default ProductsProvider;
