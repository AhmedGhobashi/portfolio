import SectionHeader from '@/components/Helper/SectionHeader'
import { skillCategories } from '@/data'
import React from 'react'

const Skills = () => {
  return (
    <div className='py-16 bg-gray-100 dark:bg-gray-950 '>
        <SectionHeader 
            title_1='Technical'
            title_2='Skill'
            description="Technologies I've been working with recently"
        />

        <div className='space-y-12 w-[80%] mx-auto'>
            {skillCategories.map((category, index)=>{
                return(
                    <div key={category.title} className=''>
                        <h3 className='text-xl font-semibold mb-6 flex items-center gap-3'>
                            <span className='w-2 h-2 bg-purple-600 rounded-full'>
                            </span>
                            {category.title}
                        </h3>
                        <div> 
                            
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills
