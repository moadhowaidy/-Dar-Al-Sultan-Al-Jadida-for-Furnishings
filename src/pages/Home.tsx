import Hero from '../components/home/Hero'
import Marquee from '../components/home/Marquee'
import TrustStorySection from '../components/home/TrustStorySection'
import Products from '../components/home/Products'
import WhyUs from '../components/home/WhyUs'
import About from '../components/home/About'
import ContactCTA from '../components/home/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustStorySection />
      <Products />
      <WhyUs />
      <About />
      <ContactCTA />
    </>
  )
}
