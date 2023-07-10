import banner from "../assets/banner.png";
import php from "../assets/php-icon.png";
import css from "../assets/css-icon.png";
import code from "../assets/code-icon2.png";

import { FaGithub, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('up', 0.3 )} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Melofors
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4 )} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="mb6 text-4xl lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am</span>
              <TypeAnimation
                sequence={["Hung Tran", 2000, "a Developer", 2000]}
                speed={50}
                className="text-violet-600"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5 )} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">
              I graduated with a specialization in Programming from BKACAD Academy of Technology. 
              I have utilized Laravel, ReactJS, and VueJS frameworks in various real-world projects.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6 )} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="flex justify-center lg:justify-start max-h-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to='contact' activeClass='active' smooth="true" spy="true" className="btn btn-lg flex items-center justify-center">Contact me</Link>
              <a href="https://www.topcv.vn/xem-cv/U1FVVFJTUFsCAw5SCFULAAENXVNdWg1SB1cFUgdc73" className="text-gradient btn-link" target="_blank" rel="noreferrer">
                My CV
              </a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.7 )} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="flex text-xl gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.5 )} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className="relative hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]">
            <img src={php} alt="" className="absolute banner-icon-php z-50 w-32 left-[-50px]"/>
            <img src={css} alt="" className="absolute banner-icon z-50 w-32 right-[-10%] top-[10%]"/>
            <img src={code} alt="" className="absolute banner-img z-50 w-32 left-[-30%] top-[50%]"/>

            <img src={banner} className="w-[440px]  h-[450px]" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
