import React from 'react'
import "./skill.css"
import { SiJavascript,SiHtml5,SiCss3,SiBootstrap, SiReact,SiRedux,SiNodedotjs,SiMongodb } from "react-icons/si";
const skill = () => {
  return (
    <div className='skill'>
    <div className="skill_continer">
    <SiHtml5 className='icons_skill'/>
    <SiCss3 className='icons_skill'/>
    <SiBootstrap className='icons_skill'/>
  <SiJavascript className='icons_skill'/>
  <SiReact className='icons_skill'/>
  <SiRedux className='icons_skill'/>
  <SiNodedotjs className='icons_skill'/>
  <SiMongodb className='icons_skill'/>
    </div>
 
    </div>
  )
}

export default skill
