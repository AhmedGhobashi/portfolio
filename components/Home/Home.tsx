
import ThemeToggler from '../Helper/ThemeToggler'
import About from './About/About'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default Home
