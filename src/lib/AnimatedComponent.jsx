import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1.1 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
