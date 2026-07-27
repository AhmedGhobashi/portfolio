import SectionHeader from '@/components/Helper/SectionHeader'
import { highlights, stats } from '@/data'
import Image from 'next/image'

const About = () => {
  return (
    <div className='py-16 bg-gray-100 dark:bg-gray-900'>
      {/* section heading */}
      <SectionHeader title_1='About' title_2='Me' description='Get to know the developer behing the code' />

      <div className='grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center'> 
      {/* image div */}
        <div data-aos='fade-right' data-aos-delay="0" data-aos-anchor-placement="top-center" className='relative'> 
          <div className='aspect-square rouned-2xl overflow-hidden p-2 '>
            <Image src ={"/images/user.jpeg"} width={700} height = {700} loading="eager"  alt='portfolio-image' className='w-fll h-full object-center rounded-xl' />
          </div>
        </div>

      {/* content div */}
        <div  data-aos='fade-left' data-aos-delay="100" data-aos-anchor-placement="top-center"  className='space-y-6'>
          <h3 className='text-2xl font-semibold'>A passionate developer who loves to create</h3>
          <p className='text-muted-foreground leading-relaxed '>
            I'm a full-stack developer with over 1 year :D of experience building web applications. My journey started with curiosity about how websites work, and it has evolved into a passion for creating seamless, user-focused digital experiences.
          </p>

          <p className='text-muted-foreground leading-relaxed '>
            Beyond coding, I'm dedicated to sharing knowledge. I believe in continuous learning and staying updated with the latest technologies. And I'd like to work in a place that will help me to grow better and better in Web-Dev field, and also to share and apply what I learn with them.
          </p>

          {/* Highlights */}
          <div    className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4  '>
            {highlights.map ((item,index)=>{
              return (
              <div key={index} className='flex items-center gap-3 text-sm'> 
                <div className='w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center'> 
                  <item.icon className='h-4 w-4 text-blue-500' />
                </div>
                <div> 
                  <span className='text-muted-foreground '> {item.text} </span>
                </div>
              </div>
            )
            }
            )}
          </div>


        </div>

      </div>

      {/* stats fake  */}
      <div className='mt-16 w-[60%] mx-auto'>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
              {stats.map((stat)=>{
                return(
                  <div  data-aos='zoom-in' data-aos-delay="150" data-aos-anchor-placement="top-center" key={stat.label} className='bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center'> 
                    <div className='text-3xl md:text-4xl font-bold text-purple-600 mb-2 '>
                      {stat.value}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
      </div>
    </div>
  )
}

export default About
