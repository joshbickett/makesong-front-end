import styled from "@emotion/styled";
import MusicIcon from "../assets/musical-note.png";
import React, { useState } from "react";
import "../App.css";

const NavigationMenu = ({ currentPage }) => {
  // https://www.videezy.com/music-related/41219-music-equalizer-for-music-party
  // const [pages, setPages] = useState([]
  //   names: ["The Technology", "Join Waitlist", "Home"],
  //   urls: ["/technology", "/waitlist", "/"],
  // ]);
  const pages = [
    { name: "About", url: "/about" },
    // { name: "Join Waitlist", url: "/waitlist" },
    { name: "Home", url: "/" },
  ];

  const onNavClick = (url) => {
    console.log("window.location: ", window.location);
    window.location.href = window.location.origin + url;
  };

  // const [pages, setPages] = useState();
  return (
    <div style={{ width: "100%", height: "75px" }}>
      <Brand>
        <Icon src={MusicIcon} />
        <Header>makesong.ai</Header>
      </Brand>
      <NavigationContainer>
        {pages.map((page) => {
          if (currentPage === page.name) {
            return (
              <CurrentNavigationItem onClick={() => onNavClick(page.url)}>
                {page.name}
              </CurrentNavigationItem>
            );
          } else {
            return (
              <NavigationItem onClick={() => onNavClick(page.url)}>
                {page.name}
              </NavigationItem>
            );
          }
        })}
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
