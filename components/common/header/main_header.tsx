"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import MainHeaderDesktop from "./main_header_desktop";
import MainHeaderMobile from "./main_header_mobile";
import { useState } from "react";

export default function MainHeader() {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.1) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <MainHeaderDesktop visible={visible} />
      <MainHeaderMobile visible={visible} />
    </>
  );
}
