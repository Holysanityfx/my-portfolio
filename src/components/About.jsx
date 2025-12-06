import Sani from "../assets/images/my-Image.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      id="about"
      className="md:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mt-20 md:p-30 p-5 flex flex-col items-center md:gap-20 md:flex md:flex-row">
        <motion.img
          className="md:h-120 md:w-120 rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105"
          src={Sani}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="p-5 md:p-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-3">About Me</h1>
          <p className="md:pr-18 mb-3">
            I’m a Front-End Developer with a strong focus on creating clean,
            responsive, and user-centered digital experiences...
          </p>

          <div className="flex gap-5">
            <div>
              <h1 className="text-2xl font-bold text-yellow-500">1+</h1>
              <p>
                Years of <br /> experience
              </p>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-yellow-500">5+</h1>
              <p>
                Projects <br /> completed
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
