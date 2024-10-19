import Navbar from "./Navbar.jsx";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const Bgcolor = useTransform(scrollYProgress, [0, 0.1], ["", "#020617"]);
  return (
    <motion.header style={{ backgroundColor: Bgcolor }} className="fixed  overflow-hidden bg-transparent   top-0 left-1/2 -translate-x-1/2 rounded-b-3xl  w-[80%]  z-10">
      <Navbar />
    </motion.header>
  );
}
