import Mort from "../assets/images/Mortgga.png"
import Short from "../assets/images/shortlink.png"
import Sunny from "../assets/images/sunnyside.png"
import Todo from "../assets/images/todo.png"
import Weather from "../assets/images/weather.png" 
import Desse from "../assets/images/dessert.png"
import Ecomme from "../assets/images/E-commer.png"
import Home from "../assets/images/home.png"
import ReactIma from "../assets/images/react.svg"
import Javas from "../assets/images/javasciptlogo.png"
import Tai from "../assets/images/tailwindlogo.png"
import Web from "../assets/images/webima.jpg"

function Projects() {
  return (
    <div>
      <div id="projects" className="flex flex-col items-center justify-center mt-10">
        <div className="flex font-bold  gap-3 text-3xl">
          <h1 className="text-yellow-500">Featured</h1> Projects
        </div>
        <p>Some of my featured works</p>

        <div className="p-12 md:grid grid-cols-2 gap-10 md:px-40 ">
          <div className=" bg-black/20 mb-10  p-5 rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-105 ">
            <img
              className=" transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105  "
              src={Mort}
              alt=""
            />

            <div>
              <h1 className="font-bold text-yellow-500 text-2xl my-3">
                Mortgage Calculator
              </h1>
              <p>
                A simple, responsive and quick tool to calculate monthly
                mortgage payments
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <img src={ReactIma} alt="" />
                <img className="h-8 " src={Javas} alt="" />
                <img className="h-8 w-8 " src={Tai} alt="" />
              </div>

              <a href="https://mortgage-cal.vercel.app/" target="_blank">
                <div className=" flex flex-col mt-3 ">
                  <img
                    className="h-10 ml-auto mr-6  w-10 rounded-full"
                    src={Web}
                    alt=""
                  />
                  <p className="ml-auto">Live Preveiw </p>
                </div>
              </a>
            </div>
          </div>

          <div className=" bg-black/20 mb-10 p-5 rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-105 ">
            <img
              className=" transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105  "
              src={Desse}
              alt=""
            />

            <div>
              <h1 className="font-bold text-yellow-500 text-2xl my-3">
                Desserts
              </h1>
              <p>
                A React app that displays a list of food products with images,
                names, and descriptions in a clean, user-friendly layout.
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <img src={ReactIma} alt="" />
                <img className="h-8 " src={Javas} alt="" />
                <img className="h-8 w-8 " src={Tai} alt="" />
              </div>

              <a
                href=" https://product-list-gamma-gold.vercel.app/"
                target="_blank"
              >
                <div className=" flex flex-col mt-3 ">
                  <img
                    className="h-10 ml-auto mr-6  w-10 rounded-full"
                    src={Web}
                    alt=""
                  />
                  <p className="ml-auto">Live Preveiw </p>
                </div>
              </a>
            </div>
          </div>

          <div className=" bg-black/20 p-5 mb-10 rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-105 ">
            <img
              className=" transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105 "
              src={Short}
              alt=""
            />

            <div>
              <h1 className="font-bold text-yellow-500 text-2xl my-3">
                Url Shorten Link
              </h1>
              <p>
                A React app that lets users shorten long URLs into easy-to-share
                links. Features a clean interface, instant link generation, and
                copy-to-clipboard functionality.
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <img src={ReactIma} alt="" />
                <img className="h-8 " src={Javas} alt="" />
                <img className="h-8 w-8 " src={Tai} alt="" />
              </div>

              <a href="https://url-shorten-link.vercel.app/" target="_blank">
                <div className=" flex flex-col mt-3 ">
                  <img
                    className="h-10 ml-auto mr-6  w-10 rounded-full"
                    src={Web}
                    alt=""
                  />
                  <p className="ml-auto">Live Preveiw </p>
                </div>
              </a>
            </div>
          </div>

          <div className=" bg-black/20 p-5 mb-10 rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-105 ">
            <img
              className=" transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105 "
              src={Sunny}
              alt=""
            />

            <div>
              <h1 className="font-bold text-yellow-500 text-2xl my-3">
                SunnySide
              </h1>
              <p>
                The project focuses on clean design, modern layout, and
                responsive behavior across devices, showcasing skills in
                translating a design mockup into a functional, pixel-perfect
                webpage.
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <img src={ReactIma} alt="" />
                <img className="h-8 " src={Javas} alt="" />
                <img className="h-8 w-8 " src={Tai} alt="" />
              </div>

              <a href=" https://sunnyside-orpin-mu.vercel.app/" target="_blank">
                <div className=" flex flex-col mt-3 ">
                  <img
                    className="h-10 ml-auto mr-6  w-10 rounded-full"
                    src={Web}
                    alt=""
                  />
                  <p className="ml-auto">Live Preveiw </p>
                </div>
              </a>
            </div>
          </div>

          <div className=" bg-black/20 mb-10 p-5 rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-105 ">
            <img
              className=" transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105 "
              src={Todo}
              alt=""
            />

            <div>
              <h1 className="font-bold text-yellow-500 text-2xl my-3">
                Todo App
              </h1>
              <p>
                A React app to quickly add, complete, and keep track of the
                tasks with a clean, interactive interface.
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <img src={ReactIma} alt="" />
                <img className="h-8 " src={Javas} alt="" />
                <img className="h-8 w-8 " src={Tai} alt="" />
              </div>

              <a href="https://todo-list-jet-kappa.vercel.app/" target="_blank">
                <div className=" flex flex-col mt-3 ">
                  <img
                    className="h-10 ml-auto mr-6  w-10 rounded-full"
                    src={Web}
                    alt=""
                  />
                  <p className="ml-auto">Live Preveiw </p>
                </div>
              </a>
            </div>
          </div>

          <div className=" bg-black/20 mb-10 p-5 rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-105 ">
            <img
              className=" transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105 "
              src={Weather}
              alt=""
            />

            <div>
              <h1 className="font-bold text-yellow-500 text-2xl my-3">
                Weather App
              </h1>
              <p>
                A React app that shows current weather and forecasts for any
                location with a clean, interactive interface.
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <img src={ReactIma} alt="" />
                <img className="h-8 " src={Javas} alt="" />
                <img className="h-8 w-8 " src={Tai} alt="" />
              </div>

              <a
                href="https://weather-app-one-chi-q9wp56w5js.vercel.app/"
                target="_blank"
              >
                <div className=" flex flex-col mt-3 ">
                  <img
                    className="h-10 ml-auto mr-6  w-10 rounded-full"
                    src={Web}
                    alt=""
                  />
                  <p className="ml-auto">Live Preveiw </p>
                </div>
              </a>
            </div>
          </div>

          <div className=" bg-black/20 p-5 mb-10 rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-105 ">
            <img
              className=" transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105 "
              src={Ecomme}
              alt=""
            />

            <div>
              <h1 className="font-bold text-yellow-500 text-2xl my-3">
                E-commerce App
              </h1>
              <p>
                A React app showcasing products with a clean layout, allowing
                users to browse items, view details, and manage a shopping cart.
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <img src={ReactIma} alt="" />
                <img className="h-8 " src={Javas} alt="" />
                <img className="h-8 w-8 " src={Tai} alt="" />
              </div>

              <a
                href="https://e-commerce-ashy-zeta-92.vercel.app/"
                target="_blank"
              >
                <div className=" flex flex-col mt-3 ">
                  <img
                    className="h-10 ml-auto mr-6  w-10 rounded-full"
                    src={Web}
                    alt=""
                  />
                  <p className="ml-auto">Live Preveiw </p>
                </div>
              </a>
            </div>
          </div>

          <div className=" bg-black/20 p-5 mb-10 rounded-lg shadow-2xl transition-transform duration-300 cursor-pointer hover:scale-105 ">
            <img
              className=" transition-transform duration-300 cursor-pointer hover:rotate-2 hover:scale-105 "
              src={Home}
              alt=""
            />

            <div>
              <h1 className="font-bold text-yellow-500 text-2xl my-3">
                Home Page
              </h1>
              <p>
                A React app featuring a clean and responsive homepage layout
                with sections for content, navigation, and visuals, showcasing
                modern UI design and component structure.
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <img src={ReactIma} alt="" />
                <img className="h-8 " src={Javas} alt="" />
                <img className="h-8 w-8 " src={Tai} alt="" />
              </div>

              <a href="https://home-page-nine-inky.vercel.app/" target="_blank">
                <div className=" flex flex-col mt-3 ">
                  <img
                    className="h-10 ml-auto mr-6  w-10 rounded-full"
                    src={Web}
                    alt=""
                  />
                  <p className="ml-auto">Live Preveiw </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects