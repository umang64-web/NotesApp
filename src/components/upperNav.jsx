import React from 'react'
import './upperNav.css'
import { CiSettings } from "react-icons/ci"
import { MdOutlineToggleOn } from "react-icons/md";

const upperNav = () => {
  return (
    <div className='upper'>
        <div className='icons'>
        <CiSettings />
        <MdOutlineToggleOn />
        <span style={{marginLeft:"3px", marginBottom:"20px"}}>Logout</span>
        </div>
    </div>
  )
}

export default upperNav;