import React from 'react'
import { Container, Hero, HeroButton, HeroParagref, HeroTitle, Logo, Main, Navbar, NavButton, NavButtons, Navmid } from './Styled'


function Coffe() {
  return (
    
    <Main>
      <Container>
        <Navbar>
          <Logo></Logo>
          <Navmid>
            <p>Home</p>
            <p>Explore Us</p>
            <p>Brands</p>
            <p>Contact us</p>
          </Navmid>
          <NavButtons>
            <NavButton>
            Sign up/Login
            </NavButton>
            <NavButton>
            Get the app
            </NavButton>
          </NavButtons>
        </Navbar>
        
        <Hero>
          <HeroTitle>
            Power up with coffee
          </HeroTitle>
          <HeroParagref>
            Start your exciting day with a cup of Brew Coffee
          </HeroParagref>
          <HeroButton>
            Explore Us
          </HeroButton>
        </Hero>
        </Container>
    </Main>
  )
}

export default Coffe