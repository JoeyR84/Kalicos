import React from "react";
import styled from "styled-components";

import Header from "./Header";
import About from "./About";
import DonationMap from "./DonationMap";
import Contact from "./Contact";
import SearchContainer from "./SearchContainer";

const LandingPage = () => (
  <div>
    <div>
      <Header />
    </div>
    <div>
      <About />
    </div>
    <div>
      <SearchContainer />
    </div>
    <div>
      <DonationMap />
    </div>
    <div>
      <Contact />
    </div>
  </div>
);

export default LandingPage;
