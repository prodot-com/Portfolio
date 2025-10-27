import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react";
import {animateScroll as scroll} from 'react-scroll';

const TopArrow = () => {

    const [showComponent, setShowComponent] = useState(false)

    const handleScroll = ()=>{
        if(window.scrollY > 500){
            setShowComponent(true)
        }else{
            setShowComponent(false)
        }
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

    const options = {
        duration: 700,
        smooth: true,
};

    const ScrollToTop = ()=>{
        scroll.scrollToTop(options)
    }

    return (<div>
        {showComponent &&
        (<div className='z-50 fixed bottom-25 right-15 
        border border-black p-2 rounded-full bg-white cursor-pointer hover:scale-105 transition-all delay-75'
        onClick={()=>ScrollToTop()}
        >
            <ChevronUp className="w-7 h-7"/>
        </div>)
}
        </div>
    )
}

export default TopArrow
