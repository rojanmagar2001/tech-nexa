import { ChatModalStore } from "@/hooks/products/use-chat-modal";
import { cn } from "@/lib/utils";
import React from "react";
import { TbSquareToggleHorizontal } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

interface ChatModalProps {
  chatModal: ChatModalStore;
}

const ChatModal: React.FC<ChatModalProps> = ({ chatModal }) => {
  return (
    <div
      className={cn(
        "max-w-[25%] my-2 sticky top-0 right-0 h-screen",
        !chatModal.isOpen ? "hidden" : "flex-1"
      )}
    >
      <div className="bg-card h-full rounded-md">
        <div className="w-full flex justify-between px-2 items-center">
          <h3 className="text-primary">Shop AI</h3>
          <div className="flex gap-x-4">
            <button className="p-2 rounded-full hover:bg-secondary transition-all duration-100">
              <TbSquareToggleHorizontal size={24} className="!stroke-primary" />
            </button>
            <button
              onClick={() => chatModal.toggleModal(chatModal.isOpen)}
              className="p-2 rounded-full hover:bg-secondary transition-all duration-100"
            >
              <IoMdClose size={24} className="!fill-primary" />
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ChatModal;
