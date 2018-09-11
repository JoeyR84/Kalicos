import React from "react";
import styled from "styled-components";

const ItemSearchBox = () => (
  <Container>
    <Header>What are you looking to donate?</Header>
    <Input placeholder="Clothing, appliances, sports equipment?" />
  </Container>
);

const Container = styled.div`
  text-align: center;
`;

const Header = styled.p`
  margin-top: 15px;
  font-size: 20px;
`;

const Input = styled.input`
  width: 80%;
  max-width: 510px;
  min-width: 340px;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
`;

export default ItemSearchBox;
