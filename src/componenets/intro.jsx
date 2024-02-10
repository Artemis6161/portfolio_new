import React from 'react'
import "./intro.css"
import img from "../assets/girl.png"


const intro = () => {
  return (
   <div className="intro">
    <p>
Hello and welcome! I'm Sangeetha Rajan, a passionate front-end web developer dedicated to crafting immersive digital experiences. With a keen eye for design and a love for clean, efficient code, I specialize in bringing creative visions to life through captivating user interfaces.</p>
   <img src={img} alt="" />
   </div>
  )
}

export default intro
