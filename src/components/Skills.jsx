 import { motion } from "framer-motion";
 import Java from "../assets/images/javasciptlogo.png";
 import Tail from "../assets/images/tailwindlogo.png";
 import Web from "../assets/images/weblogo.png";
 import Reatimae from "../assets/images/react.svg";
 import Tools from "../assets/images/toolsimage.jpg";
 import Debug from "../assets/images/debugimage.png";

 function Skills() {
   const skillCards = [
     {
       img: Reatimae,
       title: "ReactJs",
       items: ["Hooks", "Redux", "Context API", "React Router"],
     },
     {
       img: Tail,
       title: "Tailwind CSS",
       items: ["Responsive Design", "Custom Theme", "Purge"],
     },
     {
       img: Java,
       title: "JavaScript",
       items: ["ES6+", "DOM Manipulation", "Async/Await", "APIs"],
     },
     {
       img: Web,
       title: "Web Standards",
       items: ["HTML5", "CSS", "Accessibility", "Performance"],
     },
   ];

   const toolsCards = [
     {
       img: Tools,
       title: "Development Tools",
       items: ["Git", "VS Code", "Vite", "jsPDF", "NPM"],
     },
     {
       img: Debug,
       title: "Testing & Debugging",
       items: ["Jest", "React Testing Library", "Chrome DevTools"],
     },
   ];

   return (
     <motion.div
       id="skills"
       className="flex p-5 flex-col items-center mt-20 justify-center"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 0.8 }}
     >
       <div className="text-3xl font-bold flex gap-2">
         <h1 className="text-yellow-500">Skills</h1>& Expertise
       </div>
       <p className="px-10 py-5 text-center">
         Building fast, scalable, and beautifully crafted interfaces that
         deliver exceptional user experiences
       </p>

       <motion.div
         className="md:grid flex flex-wrap md:grid-cols-3 gap-5 md:gap-10 md:p-30"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, staggerChildren: 0.1 }}
       >
         {skillCards.map((skill, idx) => (
           <motion.div
             key={idx}
             className="bg-black p-8 rounded-lg shadow-2xl text-white transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105"
           >
             <div className="flex gap-3 items-center mb-8">
               <img className="h-6 w-6" src={skill.img} alt="" />
               <h1 className="font-bold text-2xl">{skill.title}</h1>
             </div>
             <div className="list-none flex flex-wrap gap-5">
               {skill.items.map((item, i) => (
                 <li key={i} className="bg-white text-black rounded-lg px-1">
                   {item}
                 </li>
               ))}
             </div>
           </motion.div>
         ))}
       </motion.div>

       <h1 className="text-3xl font-bold text-center md:-mt-20 pt-10 pb-5 md:-mb-20">
         Tools
       </h1>
       <motion.div
         className="md:grid flex flex-wrap md:grid-cols-3 gap-5 md:gap-10 md:p-30"
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8, staggerChildren: 0.1 }}
       >
         {toolsCards.map((tool, idx) => (
           <motion.div
             key={idx}
             className="bg-black p-8 rounded-lg shadow-2xl text-white transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105"
           >
             <div className="flex gap-3 items-center mb-5">
               <img className="h-6 w-6" src={tool.img} alt="" />
               <h1 className="font-bold text-2xl">{tool.title}</h1>
             </div>
             <div className="list-none flex flex-wrap gap-8">
               {tool.items.map((item, i) => (
                 <li key={i} className="bg-white text-black rounded-lg px-1">
                   {item}
                 </li>
               ))}
             </div>
           </motion.div>
         ))}
       </motion.div>
     </motion.div>
   );
 }

 export default Skills;
