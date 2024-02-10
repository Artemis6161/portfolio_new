import React from 'react'
import "./social.css"
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const social = () => {
  return (
    <div className="social">
  
   
   



<a href="https://www.linkedin.com/in/sangeetha-rj-283106198/" target="_blank"><FaLinkedinIn className='icons'/></a>
      <a href="https://github.com/Artemis6161" target="_blank"> <FiGithub className='icons' /></a>
      <a href="https://www.instagram.com/spiceitupwithsan61/" target="_blank"><FaInstagram className='icons'/></a>
    </div>
  )
}

export default social
