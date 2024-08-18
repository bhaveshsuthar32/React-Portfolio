import "./App.css";
import Porfile from "./assets/photo.png";
// import Project1 from "./assets/project1.png";
import Project2 from "./assets/project-mern.png";
import Project3 from "./assets/abc1.png";
import Project4 from "./assets/vpl.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";



import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
      }
      }, [])
      
      
  const [darkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () =>{
 
      setDarkMode(!darkMode);
    
  }

  const mytext1 = `<h1>`;
  const mytext2 = "</h1>";


  return (
    <>
      <div
        className={`${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }  relative`}
      >
        <div className=" max-w-4xl m-auto">
          <header
            className={`${scrolling ? "border-b border-slate-600" : ""} ${
              darkMode ? "bg-black text-white" : "bg-white text-black"
            } fixed left-0 right-0 top-0 z-20`}
            id="home"
          >
            <div
              className={`} ${
                darkMode ? "bg-black text-white" : "bg-white text-black"
              }container m-auto  py-6 max-w-4xl  bg-black`}
            >
              <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                <div>
                  <h1 className="font-bold text-2xl">Portfolio</h1>
                </div>
                <div>
                  <ul className="flex gap-4">
                    <li>
                      <a
                        href="#projects"
                        className=" hover:font-bold cursor-pointer"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="#technologies"
                        className=" hover:font-bold cursor-pointer"
                      >
                        Technologies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#aboutme"
                        className=" hover:font-bold cursor-pointer"
                      >
                        About me
                      </a>
                    </li>
                    <li>
                      <button
                        className="btn border-[1px] px-[6px] py-[3px] text-[12px] rounded-lg border-sky-500"
                        onClick={toggleDarkMode}
                      >
                        Dark Mode
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <main className="relative">
            {/* Intro/Banner section */}
            <section>
              <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
                <div
                  className="mt-[70px] lg:mt-[10px] md:mt-[10px] mx-0
                "
                >
                  <h1 className="font-bold text-2xl gradiant-text" id="myname">
                    <span>{mytext1}</span>
                    <br />
                    <span className="ml-16">Hello,</span>
                    <br />
                    <span className="ml-16">I'm Bhavesh suthar,</span>
                    <br />
                    <span className="ml-16">Full Stack Developer</span>
                    <br />
                    <span>{mytext2}</span>
                  </h1>
                  <div>
                    {/* <h2 className="font-bold text-4xl mt-1 gradiant-text">
                      frontend developer
                    </h2> */}
                  </div>
                  <div>
                    <p className="mt-4 text-gray-500">
                      {/* I am a Full Stack Developer specializing in the MERN
                      stack, proficient in crafting responsive web applications
                      with robust backend architecture. Passionate about
                      leveraging MongoDB, Express.js, React, and Node.js to
                      create seamless user experiences. */}
                      MERN stack developer skilled in building full web applications. Proficient in React.js, Node.js, Express.js, and MongoDB/MySQL. Experienced with modern JavaScript, TailwindCSS, Git, and cloud deployment. Focused on creating functional, responsive applications
                    </p>
                    <a href="https://drive.google.com/file/d/160SIw8zYrj6dKhx00lxTd3kjU8ZsKeMF/view?usp=drive_link">
                    <button className="px-8  shadow-gray-500 shadow-md py-3 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
               Download resume
                      
                    </button></a>
                  </div>
                </div>
                <div className="relative">
                  <div className="after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40  before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                    <img
                      src={Porfile}
                      className="relative z-10 w-[280px] mt-[40px] m-auto sm:w-[600px] hidden md:block"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Projects section */}
            <section id="projects">
              <div className="container m-auto px-4 sm:py-12">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <div className="flex flex-col grid grid-cols-2 sm:flex-row gap-10 mt-11">
                  <div className="border border-gray-500 col-span-1 rounded-md p-5 ">
                    <img src={Project3} className="w-full h-auto" />
                    <h3 className="text-2xl font-semibold mt-8">
                      EV-Market
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      Developed a full-stack electric vehicle platform using the MERN stack,
                      A project with user and admin panels, dedicated to
                      electric vehicle management. Users access tailored
                      features while administrators ensure system integrity.
                      <br />
                      Technologies used:
                      <br />
                      - Frontend: React.js, Tailwind CSS
                      <br />
                      - Backend: Node.js, Express.js 
                      <br />- Database: MongoDB
                    </p>

                    <div className="mt-5 gap-2">
                    <a href="https://github.com/bhaveshsuthar32"><button className="text-sm py-1 px-4 border rounded-[4px] hover:border-blue-500 hover:text-blue-500">
                        Checkout github
                      </button></a>
                    </div>
                  </div>
                  <div className="border border-gray-500 rounded-md col-span-1 p-5 ">
                    <img src={Project4} className="w-full h-44" />
                    <h3 className="text-2xl font-semibold mt-8">
                      VPL 
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                    Developed a full-stack VPL-Cricket-Tournament using the MERN stack, Comprehensive cricket tournament management platform.
                      <br />
                      Technologies used:
                      <br />
                      - Frontend: React.js, Tailwind CSS
                      <br />
                      - Backend: Node.js, Express.js
                      <br />- Database: MongoDB
                    </p>

                  
                    <div className="mt-5 gap-2">
                    <a href="https://github.com/bhaveshsuthar32"><button className=" text-sm py-1 px-4 border rounded-[4px] hover:border-blue-500 hover:text-blue-500">
                        Checkout github
                      </button></a>
                    </div>
                  </div>
                  <div className="border border-gray-500 rounded-md col-span-1 p-5 ">
                    <img src={Project2} className="w-full h-44" />
                    <h3 className="text-2xl font-semibold mt-8">
                    MERN-Ecommerce
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                    Developed a full-stack MERN-Ecommerce using the MERN stack. Implemented core e-commerce functionalities including shopping cart and order management for a seamless user experience.
                      <br />
                      Technologies used:
                      <br />
                      - Frontend: React.js, Tailwind CSS
                      <br />
                      - Backend: Node.js, Express.js
                      <br />- Database: MongoDB
                    </p>

                    {/* <div className="flex gap-2 mt-12">
                      <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                        Live preview
                      </button>
                      <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                        Checkout github
                      </button>
                    </div> */}
                    <div className="mt-5 gap-2">
                    <a href="https://github.com/bhaveshsuthar32"><button className=" text-sm py-1 px-4 border rounded-[4px] hover:border-blue-500 hover:text-blue-500">
                        Checkout github
                      </button></a>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col sm:flex-row  gap-10 mt-11">
                  <div className="border border-gray-500 rounded-md p-5 flex-1">
                    <img src={Project3} className="w-full h-auto" />
                    <h3 className="text-2xl font-semibold mt-8">
                      Landing page for front-end developer
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      Responsive HTML/CSS layout for landing page for front-end
                      developer. HTML5, CSS3 (SCSS)
                    </p>
                    <div className="flex gap-4 mt-12">
                      <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                        Live preview
                      </button>
                      <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                        Checkout github
                      </button>
                    </div>
                  </div>
                  <div className="border border-gray-500 rounded-md p-5 flex-1">
                    <img src={Project4} className="w-full h-auto" />
                    <h3 className="text-2xl font-semibold mt-8">
                      Website redesign for The Venus project
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      Responsive HTML/CSS layout for The Venus project. HTML5,
                      CSS3 (SCSS)
                    </p>
                    <div className="flex gap-2 mt-12">
                      <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                        Live preview
                      </button>
                      <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                        Checkout github
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
            {/* Technoglies section */}
            <section className="py-10" id="technologies">
              <div className="container m-auto px-4">
                <h2 className="text-2xl font-semibold">Technologies</h2>
                <div className="mt-14">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">HTML</h2>
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">
                        CSS, Tailwindcss & Bootstrap
                      </h2>
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <span className="w-[83%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">JavaScript</h2>
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <span className="w-[55%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">Node & Express </h2>
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">React & Electron</h2>
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <span className="w-[68%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">MySql & MongoDB</h2>
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">PHP & CodeIgniter</h2>
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                  </div>
                </div>
              </div>
            </section>
            {/* Additional skills section */}
            <section>
              <div className="container m-auto px-4 py-14">
                <h2 className="text-2xl font-semibold">
                  Additional technologies and skills
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
                  <div>
                    <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                      GitHub
                    </p>
                  </div>
                  <div>
                    <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                      Quick learning
                    </p>
                  </div>
                  <div>
                    <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                      Teamwork
                    </p>
                  </div>
                  {/* <div>
                    <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                      Quick learning
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
                  <div>
                    <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                      Engagement
                    </p>
                  </div>
                  <div>
                    <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                      B2 english
                    </p>
                  </div>
                  <div>
                    <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                      RWD
                    </p>
                  </div> */}
                </div>
              </div>
            </section>
            <section className="py-8" id="aboutme">
              <div className="container m-auto px-4">
                <h2 className="text-2xl font-semibold">About me</h2>
                <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-sky-200">
                  <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                    <h3 className="absolute left-0 text-lg font-semibold">
                      2017
                    </h3>
                    <p>
                      SSC - BSER <br />
                      Happy Children Sen. sec. School, Bagra (Jalore), Rajsthan
                      <br />
                      Percentage : 83.33/100.00
                    </p>
                  </div>
                  <div className="pl-24 mt-14 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                    <h3 className="absolute left-0 text-lg font-semibold">
                      2019
                    </h3>
                    <p>
                      HSC - BSER <br />
                      Happy Children Sen. sec. School, Bagra (Jalore), Rajsthan
                      <br />
                      Percentage : 75.20/100.00
                    </p>
                  </div>
                  <div className="pl-24 mt-14 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                    <h3 className="absolute left-[-15px] text-lg font-semibold">
                      2019-22
                    </h3>
                    <p>
                      BSc <br />
                      Mohanlal Sukhadia University, Udaipur, Rajsthan
                      <br />
                      Percentage : 75.20/100.00
                    </p>
                  </div>
                  <div className="pl-24 mt-14 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                    <h3 className="absolute left-[-15px] text-lg font-semibold">
                      2022-24
                    </h3>
                    <p>
                      MCA - Full Stack Web Developer <br />
                      Parul University, Vadodara
                      <br />
                      CGPA : 8.02/10.00
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer>
            <div className="container m-auto flex justify-between px-4 py-6">
              <div>
                <p className="text-gray-300 text-sm">Copyright @ 2024</p>
              </div>
              <div>
                <ul className="flex gap-4">
                  <li>
                    <a>
                      <img src={Facebook} className="w-5" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={LinkedIn} className="w-5" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={Instagram} className="w-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
          {scrolling && (
            <button
              className="fixed block right-8 bottom-0 w-24"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src={ArrowDown} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
