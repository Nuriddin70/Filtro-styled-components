import React from 'react'
import { Container } from '../Styled'
import { Card, CardDes, CardImg, CardOrder, CardPrice, Cards, CardTitle, Line, LineLR, LinePragref, OrderWrapper, ProductWrapper, WorkWith } from './styledProduct'
import CardImg1 from '../../asset/CardCoffee.png'
import Dunk from '../../asset/DunkinDonuts.svg'
import Nescafe from '../../asset/Nescafe-Logo.svg'
import Stackbukslogo from '../../asset/Stackbukslogo.svg'
import Timhortins from '../../asset/Timhortins.svg'

function Product() {
  return (
    <Container>
      <ProductWrapper>
        <Line>
          <LineLR></LineLR>
          <LinePragref>Explore the Coffee World</LinePragref>
          <LineLR></LineLR>
        </Line>
        <Cards>
          <Card>
            <CardImg>
              <img src={CardImg1} />
            </CardImg>
            <CardTitle>
              Cappacino
            </CardTitle>
            <CardDes>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Massa, 
              fermentum id id vitae, integer fermentum 
              tellus. In vitae id nisl quis ornare diam
              commodo in vel dolor.
            </CardDes>
            <OrderWrapper>
              <CardPrice>
                $8.60
              </CardPrice>
              <CardOrder>
                Order now
              </CardOrder>
            </OrderWrapper>
          </Card>
          <Card>
            <CardImg>
              <img src={CardImg1} />
            </CardImg>
            <CardTitle>
              Cappacino
            </CardTitle>
            <CardDes>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Massa, 
              fermentum id id vitae, integer fermentum 
              tellus. In vitae id nisl quis ornare diam
              commodo in vel dolor.
            </CardDes>
            <OrderWrapper>
              <CardPrice>
                $8.60
              </CardPrice>
              <CardOrder>
                Order now
              </CardOrder>
            </OrderWrapper>
          </Card>
          <Card>
            <CardImg>
              <img src={CardImg1} />
            </CardImg>
            <CardTitle>
              Cappacino
            </CardTitle>
            <CardDes>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Massa, 
              fermentum id id vitae, integer fermentum 
              tellus. In vitae id nisl quis ornare diam
              commodo in vel dolor.
            </CardDes>
            <OrderWrapper>
              <CardPrice>
                $8.60
              </CardPrice>
              <CardOrder>
                Order now
              </CardOrder>
            </OrderWrapper>
          </Card>
          <Card>
            <CardImg>
              <img src={CardImg1} />
            </CardImg>
            <CardTitle>
              Cappacino
            </CardTitle>
            <CardDes>
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Massa, 
              fermentum id id vitae, integer fermentum 
              tellus. In vitae id nisl quis ornare diam
              commodo in vel dolor.
            </CardDes>
            <OrderWrapper>
              <CardPrice>
                $8.60
              </CardPrice>
              <CardOrder>
                Order now
              </CardOrder>
            </OrderWrapper>
          </Card>
          
        </Cards>
        <Line>
          <LineLR></LineLR>
          <LinePragref>Explore the Coffee World</LinePragref>
          <LineLR></LineLR>
        </Line>
        <WorkWith>
          <img src={Stackbukslogo} />
          <img src={Nescafe} />
          <img src={Timhortins} />
          <img src={Dunk} />
        </WorkWith>
      </ProductWrapper>
    </Container>
    )
}

export default Product