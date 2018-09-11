import React, { Component } from "react";
import styled from "styled-components";

class LocationSearch extends Component {
  render() {
    return (
      <div>
        <Header>FIND A CHARITY</Header>
        <Wrapper>
          <Place placeholder="City, State, Zip..." />
          <Distance placeholder="Mile Radius" />
          <Button>Search</Button>
        </Wrapper>
      </div>
    );
  }
}

const Place = styled.input`
  width: 40%;
  margin-right: 5px;
  padding: 5px;
  border-radius: 6px;
`;
const Distance = styled.input`
  width: 120px;
  height: 37px;
  margin-right: 5px;
  background-color: #fff;
  padding: 5px;
`;
const Button = styled.button`
  min-width: 65px;
  background-color: green;
  color: #fff;
  padding: 5px;
  border-radius: 6px;
`;
const Wrapper = styled.form`
  margin-bottom: 20px;
  text-align: center;
`;
const Header = styled.h4`
  margin-bottom: 20px;
`;

export default LocationSearch;
