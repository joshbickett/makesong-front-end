import styled from "@emotion/styled";
import MusicIcon from "../assets/musical-note.png";
import React, { useState } from "react";
import { LogoutButton } from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";

const NavigationMenu = ({ currentPage }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // https://www.videezy.com/music-related/41219-music-equalizer-for-music-party
  // const [pages, setPages] = useState(p
  //   names: ["The Technology", "Join Waitlist", "Home"],
  //   urls: ["/technology", "/waitlist", "/"],
  // ]);
  const pages = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    // { name: "Join Waitlist", url: "/waitlist" },
  ];

  const onNavClick = (url) => {
    console.log("window.location: ", window.location);
    window.location.href = window.location.origin + url;
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-transparent">
      <div
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </div>
      <Brand>
        <Icon src={MusicIcon} />
        <Header>makesong.ai</Header>
      </Brand>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          {pages.map((page, index) => {
            return (
              <li class="nav-item" style={{ padding: "5px" }} key={index}>
                <NavigationItem onClick={() => onNavClick(page.url)}>
                  {page.name}
                </NavigationItem>
              </li>
            );
          })}
          {isAuthenticated && (
            <li class="nav-item" style={{ padding: "5px" }} key={10}>
              <LogoutButton />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;

const Brand = styled.div`
  font-size: 35px;
  width: 350px;
  padding: 10px;
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

  background-color: white;
  margin: 10px auto;
  color: black;
  line-height: 50px;
  width: 250px;
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

  background-color: black;

  margin: 10px auto;
  color: white;
  line-height: 50px;
  width: 250px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 5px;
  display: inline-block;
`;
