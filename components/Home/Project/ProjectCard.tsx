import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type Props = {
    title: string; 
    description: string;
    image: string;
    techStack: string[];
    demoUrl?: string; 
    githubUrl?: string; 
}

const ProjectCard = ({description, image, title, demoUrl, githubUrl,techStack}: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden ">
        {/* image container */}
      <div className="relative h-48 overflow-hidden">
        <Image alt={title} width={400} height={400} src={image}  className="w-full h-full object-cover"/>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h3 className="  text-xl text-black dark:text-white font-semibold mb-2 group-hover:text-blue-500 transition-colors">
          {title}     
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index)=>{
            return(
              <span key={index} className="text-xs px-3 py-1 rounded-full bg-indigo-600 text-white font-medium">
                {tech}
              </span>
            )
          })}
        </div>

        {/* Burrons */}
        <div className="flex gap-3">
          {demoUrl && (
            <Button size={"sm"} className=' flex-1'>
              <a href={demoUrl} rel="noopener noreferrer" target="_blank" className="flex">
                <ExternalLink  className="w-4 h-4 mr-2 "/>
                 <span>Live Demo</span>
              </a>
            </Button>
          )}

          {githubUrl && (
            <Button size={"sm"} className=' flex-1' variant={"outline"}>
              <a href={githubUrl} rel="noopener noreferrer" target="_blank" className="flex">
                <FaGithub  className="w-4 h-4 mr-2 "/>
                 <span>Github</span>
              </a>
            </Button>
          )}
        </div>
      </div>

    </div>
  )
}

export default ProjectCard
