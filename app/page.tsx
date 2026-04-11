import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MarqueeStrip from "./components/MarqueeStrip"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackgroundCrosses from "./components/BackgroundCrosses"

export default function Home() {
  return (
    <>
      <div className="pattern-bg" />
      <BackgroundCrosses />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <MarqueeStrip />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}