
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Education",
    description:
      "Studied Computer Programming at BKACAD Institute of Technology and graduated with merit grades",
    time: "9/2018 - 9/2022",
  },
  {
    name: "Worked on the graduation project",
    description:
      "Quis ris commodo labore. Deserunt pariatur sunt deserunt proident incididunt. Minim incididunt deserunt commodo ",
    time: "Learn more",
  },
  {
    name: "Uiux",
    description:
      "Quis ris commodo labore. Deserunt pariatur reprehenderit proident incididunt. Minim incididunt deserunt commodo ",
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
            <h3 className="h3 max-w-[455px] mb-16">
              Quis ris commodo labore. Deserunt pariatur reprehe
            </h3>
            <button className="btn btn-sm">Contact</button>
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
