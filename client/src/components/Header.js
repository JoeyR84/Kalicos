import React from "react";
import styled from "styled-components";

const Header = () => (
  <div>
    <Kalicos>KALICOS</Kalicos>
  </div>
);

const Kalicos = styled.h1`
  text-align: left;
  background: #0d449b;
  color: #fff;
  height: 90px;
  padding-top: 17px;
  padding-left: 3%;
`;

export default Header;
