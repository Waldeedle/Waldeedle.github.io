import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>SM</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/resume.pdf" activeStyle>
            Resume
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink as="a" href='mailto:syedwmasoom@gmail.com'><AiOutlineMail size={30}/></NavBtnLink>
          <NavBtnLink as="a" href='https://github.com/Waldeedle'><AiFillGithub size={30}/></NavBtnLink>
          <NavBtnLink as="a" href='https://www.linkedin.com/in/waleedmasoom/'><AiFillLinkedin size={30}/></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar