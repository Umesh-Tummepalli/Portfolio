import React,{useEffect} from 'react'
import Hero from './Hero'
import WaveLine from './WaveLine'
import ProjectsShort from './ProjectsShort'
import Cursor from "./Cursor";
import AboutInShort from "./AboutInShort"
import Button from './Button';
import Footer from './Footer';
const LandingPage = () => {
  useEffect(() => {
    document.title="Portfolio - Umesh"
  }, [])
  
  return (
    <div className="text-white">
      <Hero/>
      <WaveLine/>
      <AboutInShort/>
      <WaveLine/>
      <ProjectsShort/>
      <WaveLine/>
    </div>
  )
}

export default LandingPage