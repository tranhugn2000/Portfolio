import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from 'react-scroll'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
          variants={fadeIn('right', 0.3 )} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} 
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
          mix-blend-lighten bg-top"></motion.div>

          <motion.div variants={fadeIn('left', 0.5 )} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3}} className="flex-1">
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">I am a PHP Developer with over 1 year of experience</h3>
       
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br/>
                  Experience 
                 </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br/>
                  Completed
                 </div>
              </div>
            </div>
          <div className="flex gap-x-8 items-center">
            <Link to='contact' activeClass='active' smooth="true" spy="true"  className="btn btn-lg flex items-center">Contact me</Link>
            <a href="https://static.topcv.vn/topcv-cv-uploads/d343c3e5c3cb6663418c40b3fb2199b6.pdf#toolbar=0&navpanes=0&scrollbar=0" className="text-gradient btn-link" target="_blank" rel="noreferrer">
                My CV
            </a>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
