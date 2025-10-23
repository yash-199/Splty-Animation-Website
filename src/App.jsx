import Navbar from './components/Navbar'
import HeroSections from './sections/HeroSections'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MessageSection from './sections/MessageSection'
import FlavorSection from './sections/FlavorSection'
import { useGSAP } from '@gsap/react'
import NutritionSection from './sections/NutritionSection'
import BeefitSection from './sections/BeefitSection'
import TestimonialSection from './sections/TestimonialSection'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollSmoother)
const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  })
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSections />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BeefitSection />
            <TestimonialSection />
          </div>

        </div>
      </div>
    </main>
  )
}

export default App
