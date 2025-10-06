import profile from "../../assets/profile.jpg";
import hero1 from "../../assets/hero1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Sun, House } from "lucide-react";

const Home = () => {
  return (
    <div className="flex justify-center  items-center relative z-50 font-mono">
      {/* <div className="min-h-screen min-w-2xl">
        <section className="pt-20 px-7 pb-3">
          <div className="flex justify-between pb-3">
            <img src={profile} className="w-45 h-45 rounded-3xl" />
          </div>
          <h1 className="font-bold text-3xl tracking-tighter">
            Hi, I'm Probal
          </h1>
          <p className="pt-1">22, Kolkata|Fullstack Developer</p>
        </section>
      </div> */}
      <div className="min-h-screen min-w-[50rem] border border-black">
  <div className="fixed min-w-[50rem] overflow-hidden">
    <img 
    src={hero1} 
    alt="Example"
    className="w-[800px] h-auto object-cover"
  />
  {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.85)_100%)]"></div> */}
  <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b
  from-[#121212] to-transparent"></div>
  <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t
  from-[#121212] to-transparent"></div>
  <div className="absolute top-0 bottom-0 right-0 w-[60px] bg-gradient-to-l
  from-[#121212] to-transparent"></div>
  <div className="absolute top-0 bottom-0 left-0 w-[60px] bg-gradient-to-r
  from-[#121212] to-transparent"></div>
  </div>
  <div className="relative z-20 top-[265px]">
    <div className="flex ml-7 justify-between">
            <img src={profile} className="w-35 h-35 rounded-full" />
    </div>
  </div>
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
