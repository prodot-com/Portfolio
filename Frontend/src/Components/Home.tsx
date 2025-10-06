import profile from "../../assets/profile.jpg";
import pro2 from "../../assets/pro2.jpg";
import hero1 from "../../assets/hero1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Sun, Dot, House } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white relative overflow-hidden">

      
      <div className="fixed top-0 left-0 w-full h-[70px] bg-white shadow z-30 flex items-center justify-center">
        <h1 className="text-xl font-semibold tracking-tight">Portfolio</h1>
      </div>

      
      <div className="relative w-full max-w-5xl mt-[70px]">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src={hero1}
            alt="Hero Background"
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-[#121212] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#121212] to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-[100px] bg-gradient-to-l from-[#121212] to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 w-[100px] bg-gradient-to-r from-[#121212] to-transparent"></div>
        </div>

        
        <div className="heading-font absolute inset-0 flex flex-col items-start justify-end pb-7 pl-8 text-white z-20">
          <img
            src={pro2}
            alt="Profile"
            className="w-35 h-35 rounded-full border-2 border-white shadow-lg mb-4"
          />
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Probal Ghosh</h2>
            <p className="flex items-center text-gray-300 text-sm mt-1">
              22 <Dot /> engineer <Dot /> fullstack developer
            </p>
          </div>
        </div>
      </div>

      
      <div className="heading-font w-full max-w-5xl mt-10 px-6 text-center text-gray-700">
        <p>Welcome to my portfolio — more sections coming soon!</p>
      </div>

      
      <div className="fixed border border-gray-400 bottom-0 mb-8 flex items-center gap-2 p-2 px-4 cursor-pointer hover:scale-105 hover:shadow-lg transition-all delay-200 ease-in-out rounded-3xl">
        <div>
                  <House size={35} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out"/>
        </div>
        <div className="flex items-center gap-2 px-2 border-x-2 border-gray-400">
          <FontAwesomeIcon icon={faEnvelope} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out" size="xl"/>
          <FontAwesomeIcon icon={faXTwitter} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out" size="xl"/>
          <FontAwesomeIcon icon={faLinkedinIn} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out" size="xl"/>
          <FontAwesomeIcon icon={faGithub} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out" size="xl"/>
        </div>
        <div>
                  <Sun size={35} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
