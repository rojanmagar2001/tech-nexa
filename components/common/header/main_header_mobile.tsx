import { AnimatePresence, motion } from "framer-motion";
import { MdMenu } from "react-icons/md";

interface MainHeaderMobileProps {
  visible: boolean;
}

export default function MainHeaderMobile({ visible }: MainHeaderMobileProps) {
  return (
    <AnimatePresence>
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="p-4 flex justify-between items-center lg:hidden"
      >
        <h1>Tech Nexa</h1>
        <button className="w-8 h-8">
          <MdMenu size={24} fill="#121212" />
        </button>
      </motion.nav>
    </AnimatePresence>
  );
}
