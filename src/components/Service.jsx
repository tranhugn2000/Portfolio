import php from "../assets/php-logo.png";
import css from "../assets/css-logo.png";
import js from "../assets/js-logo.png";
import laravel from "../assets/laravel.png";
import reactLogo from "../assets/logo-react-js.png";
import vueLogo from "../assets/vuejs-logo.png";

import mySqlLogo from "../assets/logo-mysql.png";
import PostgreSQL from "../assets/PostgreSQL.png";


import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Education",
    description:
      "Studied Computer Programming at BKACAD Institute of Technology and graduated with merit grades.",
    time: "9/2018 - 9/2022",
  },
  {
    name: "Graduation project",
    description:
      "Using Laravel, CSS, JS, Boostrap template to design a movie ticket booking website.",
    time: "7/2022 - 9/2022",
  },
  {
    name: "Worked at the company.",
    description:
      "Participate in real company projects. Perform tasks and design according to the leader's requirements.",
    time: "8/2022 - Present",
  },
];

const Service = () => {
  return (
    <section className="section" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-violet-300 font-semibold mb-6">Skills</h2>
            <h4 className="text-xl tracking-wider font-primary font-semibold max-w-[455px] mb-16">
              The programming languages, libraries, and frameworks I have used are:
            </h4>
            <div className="flex items-center gap-4">
              <img src={php} className="banner-logo-1 w-11" alt=""/>
              <img src={css} className="banner-logo-2 w-10" alt=""/>
              <img src={js} className="banner-logo-3 w-10" alt=""/>
              <img src={laravel} className="banner-logo-4 w-10" alt=""/>
              <img src={reactLogo} className="banner-logo-5 w-10" alt=""/>
              <img src={vueLogo} className="banner-logo-6 w-10" alt=""/>
            </div>
            <div className="mt-16">
              <h4 className="text-xl tracking-wider font-primary font-semibold max-w-[455px] mb-16">
                  Database Management System:
              </h4>
              <div className="max-w-[355px] flex justify-center items-center gap-4 mt-16">
                
                <img src={PostgreSQL} className="banner-logo-3 w-10" alt=""/>
                <img src={mySqlLogo} className="banner-logo-4 w-10" alt=""/>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-violet-300 font-semibold mb-6">
              Experience
            </h2>

            <div className="">
              {services.map((service, index) => {
                const { name, description, time } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[126px] mb-[38px] flex"
                    key={index}
                  >
                    <div className=" max-w-[576px]">
                      <div className="flex justify-between">
                        <h4 className="text-xl tracking-wider font-primary font-semibold mb-6">
                          {name}
                        </h4>
                        <p className="font-secondary text-base leading-tight">{time}</p>
                      </div>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
