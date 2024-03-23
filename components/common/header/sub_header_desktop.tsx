import { useEffect, useState } from "react";
import { HoveredDto } from "./header.dto";
import { AnimatePresence, motion } from "framer-motion";

interface SubHeaderDesktopProps {
  hovered: HoveredDto;
  setHovered: React.Dispatch<React.SetStateAction<HoveredDto>>;
}

const dataF = [
  {
    name: "Apple",
    series: [
      "Macbook",
      "Macbook Air",
      "Macbook Pro",
      "iMac",
      "Mac Mini",
      "Mac Pro",
    ],
  },
  {
    name: "Dell",
    series: ["Inspiron", "XPS", "Alienware", "G Series", "Vostro"],
  },
  {
    name: "Razer",
    series: ["Blade", "Blade Stealth", "Blade Pro"],
  },
  {
    name: "Asus",
    series: ["Zenbook", "Vivobook", "TUF", "ROG", "ProArt"],
  },
  {
    name: "Acer",
    series: ["Aspire", "Predator", "Swift", "Spin", "ConceptD"],
  },
  {
    name: "Dell",
    series: ["Inspiron", "XPS", "Alienware", "G Series", "Vostro"],
  },
  {
    name: "Razer",
    series: ["Blade", "Blade Stealth", "Blade Pro"],
  },
  {
    name: "Asus",
    series: ["Zenbook", "Vivobook", "TUF", "ROG", "ProArt"],
  },
];

const dataX = [
  {
    name: "Apple",
    series: [
      "Macbook",
      "Macbook Air",
      "Macbook Pro",
      "iMac",
      "Mac Mini",
      "Mac Pro",
    ],
  },
  {
    name: "Dell",
    series: ["Inspiron", "XPS", "Alienware", "G Series", "Vostro"],
  },
  {
    name: "Razer",
    series: ["Blade", "Blade Stealth", "Blade Pro"],
  },
];

export default function SubHeaderDesktop({
  hovered,
  setHovered,
}: SubHeaderDesktopProps) {
  const [data, setData] = useState<typeof dataX>();

  useEffect(() => {
    if (hovered.name === "category") {
      setData(dataF);
    } else {
      setData(dataX);
    }
  }, [hovered.name]);
  return (
    <AnimatePresence>
      {hovered.hovered && (
        <motion.div
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, transition: { delay: 0.2 }, opacity: 0 }}
          className="bg-primary absolute self-center top-12 w-[calc(100vw-6rem)] px-20 py-16 mx-10 min-h-fit z-[100] origin-top rounded-b-md"
          onMouseEnter={() => {
            setHovered({
              ...hovered,
              hovered: true,
            });
          }}
          onMouseLeave={() => {
            setHovered({
              ...hovered,
              hovered: false,
            });
          }}
        >
          {/* {hovered.name === "category" ? ( */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex gap-x-28 gap-y-8 flex-wrap text-secondary"
          >
            {data?.map((item, index) => (
              <ul
                key={index}
                className="flex flex-col items-start gap-y-2 tracking-[0.8px]"
              >
                <li className="font-bold text-xl text-secondary">
                  {item.name}
                </li>
                <ul>
                  {item.series.map((series, index) => (
                    <li key={index} className="text-secondary font-light">
                      <a href="/">{series}</a>
                    </li>
                  ))}
                </ul>
              </ul>
            ))}
          </motion.div>
          )
        </motion.div>
      )}
    </AnimatePresence>
  );
}
