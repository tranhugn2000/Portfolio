import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            variants={fadeIn('right', 0.3 )} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-violet-300 font-medium mb-2 tracking-wide "> Get in touch</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let&apos;s wwork<br/>
                together
              </h2>
            </div>
          </motion.div>
          <motion.form 
            variants={fadeIn('left', 0.3 )} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.3}}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
          >
            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-violet-500 transition-all" type="text" name="name" placeholder="Your name"/>
            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-violet-500 transition-all" type="text" name="email" placeholder="Your email"/>
            <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white/50 focus:border-violet-500 transition-all resize-none mb-12" placeholder="Your message" cols=""></textarea>
            <button className="btn btn-lg" type="submit">Send message</button>
          </motion.form>
        </div>
        
      </div>
    </section>
  )
}

export default Contact