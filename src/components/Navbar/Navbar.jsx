import React from 'react'
import { Arr, ArrText, Ccc, Container, Filtro, FristChild, Hr, NavbarLine, NavbarLinel, NavbarLinePragref, NavbarMenu, NavbarMenuWrapper, NavbarSection } from './NavbarStyled'
import Twitter from '../../asset/twitter.png'
function Navbar() {
  return (
    
    <NavbarSection>
      <Container>
        <NavbarLine>
          <NavbarLinel></NavbarLinel>
          <NavbarLinePragref>
            Get in Touch with Us
          </NavbarLinePragref>
          <NavbarLinel></NavbarLinel>
        </NavbarLine>
        <NavbarMenuWrapper>
          <NavbarMenu>
            <FristChild>Merchandise</FristChild>
            <p>T-shirts</p>
            <p>Caps</p>
            <p>Masks</p>
          </NavbarMenu>
          <NavbarMenu>
            <FristChild>Franchise</FristChild>
            <p>Coffee Outlet</p>
            <p>Coffee Vending Machine</p>
            <p>Contact Us</p>
          </NavbarMenu>
          <NavbarMenu>
            <FristChild>About Us</FristChild>
            <p>Promotions</p>
            <p>Customer Care</p>
            <p>Legal Information</p>
            <p>Achievements </p>
            <p>Careers</p>
          </NavbarMenu>
          <NavbarMenu>
            <FristChild>Follow Us</FristChild>
            <img src={Twitter} />
            <img src={Twitter} />
            <img src={Twitter} />
            <img src={Twitter} />
          </NavbarMenu>
        </NavbarMenuWrapper>
        <Hr>
        </Hr>
        <Arr>
          <Ccc>C</Ccc>
          <Filtro>Filtro</Filtro>
          <ArrText> All Rights Reserved </ArrText>
        </Arr>
        </Container>
    </NavbarSection>
    
  )
}

export default Navbar