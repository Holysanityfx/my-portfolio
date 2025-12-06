import Facebook from "../assets/images/icon-facebook.svg"
import Pinte from "../assets/images/icon-pinterest.svg"
import Twitter from "../assets/images/icon-twitter.svg"
import Youtu from "../assets/images/icon-youtube.svg"
function Hero() {
  return (
    <div className="bg-amber-950 text-amber-50 font-serif  min-h-screen px-5 text-center flex flex-col items-center justify-center md:px-70">
      <h1 className="text-3xl font-bold mb-5">Heyy! I am Abubakar Mohammed Sani</h1>
      <p className="text-yellow-500 mb-5 text-3xl font-bold ">Frontend developer</p>
      <p className="text-center mb-10">
        Hi, I’m Abubakar a Front-End Software Developer who transforms ideas
        into clean, responsive, and user-focused digital experiences. I
        specialize in building modern web interfaces using React, JavaScript,
        and Tailwind CSS, with a strong passion for performance, accessibility,
        and pixel-perfect design.
      </p>

      <div className="flex gap-8 mb-10">
        <div className="text-center">
          <h1 className="text-yellow-500">90%</h1>
          <p className="text-sm">Collaborations</p>
        </div>
        <div className="text-center">
          <h1 className="text-yellow-500">80%</h1>
          <p className="text-sm">Pressure Handling</p>
        </div>
        <div className="text-center">
          <h1 className="text-yellow-500">+50%</h1>
          <p className="text-sm">Consumer Satisfied</p>
        </div>
      </div>

      <button className=" bg-green-700 p-2 rounded-lg mb-8 cursor-pointer">Get in Touch </button>

      <div className="flex gap-9">
        <img className=" cursor-pointer" src={Facebook} alt="facebook" />
        <img className=" cursor-pointer" src={Pinte} alt="Pinterest" />
        <img className=" cursor-pointer" src={Youtu} alt="Youtube" />
        <img className="cursor-pointer" src={Twitter} alt="Twitter" />
      </div>
    </div>
  );
}

export default Hero