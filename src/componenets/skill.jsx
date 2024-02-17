
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./skill.css"
import { SiJavascript,SiHtml5,SiCss3,SiBootstrap, SiReact,SiRedux,SiNodedotjs,SiMongodb } from "react-icons/si";
const skill = () => {
  
    return (
<div className="skill-title">

<h1>SKILLS</h1>
      <HorizontalScrollCarousel />
     
  
</div>
      )
  }
  const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["100%", "1%"]);
    // const y = useTransform(scrollYProgress, [0, 1], ["1%", "-10%"]);
  return (
    <section  ref={targetRef} className='skill main'  data-bgcolor="#3b2525"
    data-textcolor="#d0b6c0">
          
    <div className="skill_continer">
    <motion.div style={{ x }} >
    <SiHtml5 className='icons_skill'/>
    <SiCss3 className='icons_skill'/>
    <SiBootstrap className='icons_skill'/>
  <SiJavascript className='icons_skill'/>
  <SiReact className='icons_skill'/>
  <SiRedux className='icons_skill'/>
  <SiNodedotjs className='icons_skill'/>
  <SiMongodb className='icons_skill'/>
  </motion.div>


    </div>
    <div className="skill_continer2">
    <motion.div style={{ x }} >
    <SiHtml5 className='icons_skill'/>
    <SiCss3 className='icons_skill'/>
    <SiBootstrap className='icons_skill'/>
  <SiJavascript className='icons_skill'/>
  <SiReact className='icons_skill'/>
  <SiRedux className='icons_skill'/>
  <SiNodedotjs className='icons_skill'/>
  <SiMongodb className='icons_skill'/>
  </motion.div>


    </div>
 
    </section>
  )
}

export default skill;
