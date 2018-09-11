import React from "react";
import styled from "styled-components";

const About = () => (
  <Wrapper>
    <Title>About</Title>
    <p>
      Edison bulb 90's activated charcoal, skateboard tumeric austin copper mug
      sustainable succulents glossier semiotics ethical hexagon. Vegan ennui
      knausgaard, slow-carb put a bird on it kombucha venmo kale chips vape
      austin pour-over PBR&B marfa viral. Small batch vape woke franzen pop-up
      kitsch cloud bread mumblecore blog air plant ramps trust fund. Green juice
      before they sold out hoodie pug 90's. Viral squid hell of, church-key
      vaporware vexillologist live-edge vegan taxidermy vape blue bottle twee
      XOXO shabby chic.
    </p>
    <Directions>Use the search below to find a charity near you.</Directions>
  </Wrapper>
);

const Title = styled.h1`
  font-size: 30px;
  text-align: left;
  color: #000;
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  margin: 3%;
`;
const Directions = styled.p`
  font-weight: bold;
`;
export default About;
