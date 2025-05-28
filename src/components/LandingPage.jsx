import React from 'react'
import Hero from './Hero'
import WaveLine from './WaveLine'
import ProjectsShort from './ProjectsShort'
import Cursor from "./Cursor";
import AboutInShort from "./AboutInShort"
const LandingPage = () => {
  return (
    <div className="text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <Hero/>
      <WaveLine/>
      <AboutInShort/>
      <WaveLine/>
      <ProjectsShort/>
    </div>
  )
}

export default LandingPage