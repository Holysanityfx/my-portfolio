import Whatsp from "../assets/images/whatappima.jpg"
import Twitt from "../assets/images/ximage.jpg"
import Face from "../assets/images/faceimage.jpg"
import Email from "../assets/images/emailimgae.png"
function Contacts() {
  return (
    <div>
      <div id="contacts" className="flex mt-5 text-3xl font-bold justify-center gap-3">
        <h1 className="text-yellow-500">Let's</h1>
        connect
      </div>
      <p className="text-center mb-30">
        Wether you have a project in Mind or just want to say hi, I'd love to
        hear.
      </p>

      <div className="flex mt-5 text-3xl font-bold justify-center gap-3">
        <h1 className="text-yellow-500">Find</h1>
        Me Online
      </div>
      <p className="text-center mb-5">
        Let's collaborate or chat-reach me accross any of these platforms
      </p>

      <div className="md:flex p-5  grid grid-cols-2 gap-4 md:gap-5 justify-center ">
        <a
          href="https://www.facebook.com/abubakarmohammed.sani.96?mibextid=ZbWKwL"
          target="_blank"
        >
          <div className=" p-2 gap-3 bg-black flex items-center rounded-lg text-white font-bold transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105">
            <img className="h-10 w-10 rounded-full" src={Face} alt="" />
            <h1>Facebook</h1>
          </div>
        </a>
        <a href="https://wa.me/qr/DME3B7VSY3E5O1" target="_blank">
          <div className=" p-2 gap-3 bg-black flex items-center rounded-lg text-white font-bold transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105">
            <img className="h-10 w-10 rounded-full" src={Whatsp} alt="" />
            <h1>WhatsApp</h1>
          </div>
        </a>
        <a
          href="https://x.com/mohammersanee?t=t5ZFp2M6riUsY1QnfSURhA&s=08"
          target="_blank"
        >
          <div className=" p-2 gap-3 bg-black flex items-center rounded-lg text-white font-bold transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105 ">
            <img className="h-10 w-10 rounded-full" src={Twitt} alt="" />
            <h1>Twitter</h1>
          </div>
        </a>

        <a href="mailto:abubakarmohammedsanee@gmail.com">
          <div className=" p-2 gap-3 bg-black flex items-center rounded-lg text-white font-bold transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105">
            <img className="h-10 w-10 rounded-full" src={Email} alt="" />
            <h1>Email</h1>
          </div>
        </a>
      </div>

      <div className="text-sm mt-10 border-t-2 p-5 justify-center flex">
        <div className="flex gap-1">
          @2025 <h1 className="text-yellow-500 font-extrabold ">HolySanity,</h1>{" "}
          All Rights Reserved{" "}
        </div>
      </div>
    </div>
  );
}

export default Contacts