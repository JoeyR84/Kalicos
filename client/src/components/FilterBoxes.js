import React, { Component } from "react";
import styled from "styled-components";

class FilterBoxes extends Component {
  render() {
    return (
      <Container>
        <Box>
          <CheckBox />
          <Text>Donate Items</Text>
        </Box>
        <Box>
          <CheckBox />
          <Text>Amazon Smile</Text>
        </Box>
        <Box>
          <CheckBox />
          <Text>Guidestar</Text>
        </Box>
        <Box>
          <CheckBox />
          <Text>Donate Funds</Text>
        </Box>
        <Box>
          <CheckBox />
          <Text>Volunteer</Text>
        </Box>
        <Box>
          <CheckBox />
          <Text>Shop or Store</Text>
        </Box>
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 620px;
  margin: auto;
`;

const Box = styled.div`
  height: 38px;
  width: 160px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 6px;
  display: inline-block;
  margin: 5px;
`;
const Text = styled.p`
  display: inline-block;
  clear: both;
  margin-left: 5px;
  margin-right: 15px;
  margin-top: 5px;
  float: right;
`;
const CheckBox = styled.div`
  background-color: #000;
  height: 22px;
  width: 22px;
  margin-left: 7px;
  margin-top: 7px;
  border-radius: 6px;
  display: inline-block;
  clear: both;
`;

export default FilterBoxes;
