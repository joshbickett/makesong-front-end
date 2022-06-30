import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <NavigationItem
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </NavigationItem>
  );
};

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
