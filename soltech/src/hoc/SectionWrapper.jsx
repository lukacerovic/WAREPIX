import { motion } from "framer-motion";

import { styles } from "../styles";

const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
const StarWrapper = (Component, idName) =>
  function HOC({experiences}) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} mx-auto w-[100%] relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component experiences={experiences}/>
      </motion.section>
    );
  };

export default StarWrapper;