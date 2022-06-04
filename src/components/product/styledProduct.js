import styled from "styled-components";

export const ProductWrapper = styled.div`
  background: #fffada;
  z-index: -1;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  margin: 33px 50px;
`;

export const LineLR = styled.hr`
  width: 450px;
  background-color: #a0583c;
  border: px solid #a0583c;
`;
export const LinePragref = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 34px;
  color: #c08267;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
  margin: 70px 0;
`;

export const Card = styled.div`
  width: 260px;
  padding: 15px;
  background: #c08267;
  box-shadow: 0px 2px 20px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const CardImg = styled.div`
  width: 230.92px;
  border-radius: 10px;
  z-index: 99;
  overflow: hidden;
`;

export const CardTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 11px;
`;

export const CardDes = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #fffada;
  margin-bottom: 35px;
`;

export const OrderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const CardPrice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 32px;
  color: #ffffff;
`;

export const CardOrder = styled.div`
  background: #a0583c;
  border-radius: 10px;
  padding: 10px 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const WorkWith = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 130px;
`;
