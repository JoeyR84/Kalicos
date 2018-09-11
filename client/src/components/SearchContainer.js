import React from "react";
import styled from "styled-components";

import FilterBoxes from "./FilterBoxes";
import ItemSearchBox from "./ItemSearchBox";
import LocationSearch from "./LocationSearch";

const SearchContainer = () => (
  <Wrapper>
    <div>
      <LocationSearch />
    </div>
    <div>
      <FilterBoxes />
    </div>
    <div>
      <ItemSearchBox />
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  background-color: #def4ef;
  height: 380px;
  padding-top: 25px;
`;

export default SearchContainer;
