 import { useState } from "react";
 import Menu from "../assets/images/icon-hamburger.svg"
 import Close from "../assets/images/closeicon.png"
 function Nav() {

  const [Sidebar, setSidebar] = useState(false)

   return (
     <div className="fixed top-0 left-0 w-full rounded-lg bg-black/80 text-amber-50 z-50 shadow-md">
       <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
         {/* Logo */}
         <div className="flex items-center text-xl font-bold">
           Holy <h1 className="text-yellow-400">Sanity</h1>
         </div>

         <nav className="hidden md:flex gap-6">
           <a href="#about" className="hover:text-yellow-400 transition">
             About
           </a>
           <a href="#skills" className="hover:text-yellow-400 transition">
             Skills
           </a>
           
           <a href="#projects" className="hover:text-yellow-400 transition">
             Projects
           </a>
           <a href="#contacts" className="hover:text-yellow-400 transition">
             Contacts
           </a>
         </nav>
         <img
           onClick={() => setSidebar(true)}
           className="md:hidden  cursor-pointer"
           src={Menu}
           alt=""
         />
       </div>
       {Sidebar && (
         <nav className=" absolute bg-black/90 min-h-screen w-full  ml-50 flex flex-col -mt-12 p-5 gap-8 font-bold ">
           <img
           onClick={()=> setSidebar(false)}
           className="h-5 w-5 cursor-pointer" src={Close} alt="" />
           <a href="#about" className="hover:text-yellow-400 transition">
             About
           </a>
           <a href="#skills" className="hover:text-yellow-400 transition">
             Skills
           </a>
           <a href="#projects" className="hover:text-yellow-400 transition">
             Projects
           </a>
           <a href="#contacts" className="hover:text-yellow-400 transition">
             Contacts
           </a>
         </nav>
       )}
       
     </div>
   );
 }

 export default Nav;
