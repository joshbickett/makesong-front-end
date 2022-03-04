import styled from "@emotion/styled";
import MusicIcon from "../assets/musical-note.png";
import React, { useState } from "react";
import "../App.css";

const NavigationMenu = ({ currentPage }) => {
  // https://www.videezy.com/music-related/41219-music-equalizer-for-music-party
  const [pages, setPages] = useState([
    "The Technology",
    "Join Waitlist",
    "Home",
  ]);
  return (
    <div>
      <Brand>
        <Icon src={MusicIcon} />
        <Header>makesong.ai</Header>
      </Brand>
      <NavigationContainer>
        {pages.map((page) => (
          <div>
            {currentPage === page && (
              <CurrentNavigationItem>{page}</CurrentNavigationItem>
            )}
            {currentPage !== page && <NavigationItem>{page}</NavigationItem>}
          </div>
        ))}

        {/* <NavigationItem>Join waitlist</NavigationItem>
        <CurrentNavigationItem>Home</CurrentNavigationItem> */}
      </NavigationContainer>
    </div>
  );
};

export default NavigationMenu;

const NavigationContainer = styled.div`
  width: 66vw;

  float: right;
`;

const Brand = styled.div`
  font-size: 35px;
  width: 350px;

  margin: 0;
  float: left;
`;

const Header = styled.div`
  font-size: 35px;
  display: inline-block;
  width: 275px;
  margin: 0 auto;
`;

const NavigationItem = styled.div`
  font-size: 25px;
  border: 1px solid white;
  background-color: white;
  margin: 10px;
  color: black;
  line-height: 50px;
  width: 250px;
  float: right;
  cursor: pointer;
  &:hover {
    background-color: #f0c;
    color: #fff;
  }
  &:active {
    background-color: #03f;
    color: #f90;
  }
`;

const CurrentNavigationItem = styled.div`
  font-size: 25px;
  border: 1px solid white;
  background-color: back;
  margin: 10px;
  color: white;
  line-height: 50px;
  width: 250px;
  float: right;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 15px;
  display: inline-block;
`;
