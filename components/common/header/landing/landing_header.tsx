"use client";
import React, { useEffect, useState } from "react";
import LandingMainHeader from "./landing_main_header";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

const LandingHeader = () => {
  const { scrollYProgress } = useScroll();

  const url = usePathname();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (url === "/") {
      // Check if current is not undefined and is a number
      if (typeof current === "number") {
        //   let direction = current! - scrollYProgress.getPrevious()!;

        if (scrollYProgress.get() > 0.6) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <LandingMainHeader visible={visible} isHome={url === "/"} />
    </>
  );
};

export default LandingHeader;
