'use client';


import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import { TypeAnimation } from "react-type-animation"
const Hero = () => {
  return (
    <div className='relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,250,1)_0%,rgba(244,244,244,1)_42.3%,rgba(244,244,244,1)_100.2%)] flex justify-center items-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]'>
      {/* content of hero */}
      <div className='relative z-10 text-center'>
        {/* subtitle علامة المتاح للفرص والنص اللي جنبها */}
        <div data-aos="fade-up" className='sm:mb-6'>
            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8  '>
                <span className='w-2 h-2 rounded-full bg-green-500'></span>
                Available for opportunities
            </span>
        </div>
        
        {/* title */}
        <h1 data-aos="fade-up" data-aos-delay="100" className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
            Hi, I&apos;m <span className='text-purple-800 dark:text-yellow-300'>Ahmed Osama</span>
        </h1>

        {/* Type Animation part :D */}
        <div data-aos="fade-up" data-aos-delay="200" className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12 ">
            <TypeAnimation
            sequence={[
                "Full-Stack NEXT.JS",
                2000,
                "Fresh Graduate",
                2000,
                "Passionate Learner",
                2000
            ]}
            
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"

            />
        </div>

        {/* Description Heroo */}
        <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
            Crafting exceptional digital experiences with modern technologies. Passionate about building scalable, preformative, and secure applications.
        </p>

        {/* Buttons */}
        <div  data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size={"lg"}  className=' w-fit mx-auto sm:mx-0' >
            <a href="#_" className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5 mr-2" />
                View Projects
            </a>
          </Button>  

           <Button size={"lg"} className='w-fit mx-auto sm:mx-0' >
            <a href="#_" className="flex items-center gap-2">
                <Download className="w-5 h-5 mr-2" />
                Download CV
            </a>
          </Button> 
        </div>
      </div>
    </div>
  )
}

export default Hero
