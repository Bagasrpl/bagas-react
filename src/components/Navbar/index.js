import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems,MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
         <Span>Bagas Project</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Keahlian</NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Keahlian</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar