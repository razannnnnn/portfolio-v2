import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MarqueeStrip from "./components/MarqueeStrip"
import DividerRow from "./components/DividerRow"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <>
      <div className="pattern-bg" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <MarqueeStrip />
        <DividerRow />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}