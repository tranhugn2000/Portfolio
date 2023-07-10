import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/work-1.png";
import Img2 from "../assets/work-2.png";
import Img3 from "../assets/work-3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto mt-3">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="grid grid-cols-1 gap-8 mb-10 lg:grid-cols-2">
            <motion.div 
             variants={fadeIn('right', 0.3 )} 
             initial="hidden" 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.3}}>
              <h2 className="h2 leading-tight text-accent">My lastest<br/>
                Work.
              </h2>
              <p className="max-w-sm mb-6">
                Anim velit irure occaecat aute tempor eu incididunt et sit amet cillum. 
                Aliquip id anim magna consectetur reprehenderit laboris  .
              </p>
              <button className="btn btn-sm">View All Projects</button>
            </motion.div>
            {/* Project-1 */}
            <motion.div
              variants={fadeIn('left', 0.3 )} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.3}} 
              className="group relative overflow-hidden border-[3px] border-white/50 rounded-xl lg:h-80">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"> 
              </div>
              <img className="group-hover:scale-125 transition-all duration-500 h-auto lg:h-full object-fill" src={Img1} alt=""/>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">GRADUATION THESIS </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <span className="text-3xl text-white"> Movie theater ticket booking website</span>
              </div>
            </motion.div>

            {/* Project 2 */}
            
            <motion.div
            variants={fadeIn('right', 0.3 )} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            className="group relative overflow-hidden border-[3px] border-white/50 rounded-xl lg:h-80">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
              </div>
              <img className="group-hover:scale-125 transition-all duration-500 h-auto lg:h-full object-fill" src={Img2} alt=""/>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient uppercase">Personal project</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <span className="text-3xl text-white"> Website selling technology products</span>
              </div>
            </motion.div>

            {/* Project 2 */}

            <motion.div 
            variants={fadeIn('left', 0.3 )} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}} 
            className="group relative overflow-hidden border-[3px] border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">  
              </div>
              <img className="group-hover:scale-125 transition-all duration-500 h-auto lg:h-full object-fill" src={Img3} alt=""/>
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient uppercase">personal project</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
               <span className="text-3xl text-white"> Portfolio website</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work