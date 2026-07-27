
import About from './About/About'
import ClientReview from './ClientReview/ClientReview'
import Contact from './Contact/Contact'
import Experience from './Experience/Experience'
import Hero from './Hero/Hero'
import Project from './Project/Project'
import Skills from './Skills/Skills'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <ClientReview />
      <Contact />
    </div>
  )
}

export default Home
