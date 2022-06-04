import styled from "styled-components";
import LogoSrc from "../asset/BgImage.jpg";
import MainLogo from "../asset/Filtro.svg";

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const Main = styled.div`
  background-image: url(${LogoSrc});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;
export const Logo = styled.div`
  background-image: url(${MainLogo});
  width: 67px;
  height: 23px;
  font-family: "Gotham";
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 23px;
  background-repeat: no-repeat;
  color: white;
`;

export const Navmid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  height: 25px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #efeff5;
`;
export const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
 
`;

export const NavButton = styled.div`
  text-align: center;
  padding: 15.4px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #efeff5;
  width: 115px;
  background: #a0583c;
  border-radius: 8px;
  color: wheat;
  &:nth-child(1) {
        margin-right: 15px;
    }
`;

export const Hero = styled.div`
  text-align: center;
  margin: auto;
  width: 900px;
  margin-top: 200px;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  /* width: 687px; */
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 90px;

  color: #fffada;
`;

export const HeroParagref = styled.p`
margin: 0;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ccb9b1;
`;

export const HeroButton = styled.div`
  width: 250px;
  padding: 10px 0;
  margin: 18px auto 0;
  background: linear-gradient(90deg, #a0583c 0%, #c08267 100%);
  border-radius: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #efeff5;
  
`;
