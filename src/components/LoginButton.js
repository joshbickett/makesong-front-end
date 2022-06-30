import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "@emotion/styled";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledButton onClick={() => loginWithRedirect()}>GET STARTED</StyledButton>
  );
};

const StyledButton = styled.button`
  height: 40px;
  width: 175px;
  font-size: 16px;
  border-radius: 5px;
  margin: 30px auto;
  border: 0;
  font-weight: bold;
  display: block;
  &:hover {
    background-color: #f0c;
    color: #fff;
  }
  &:active {
    background-color: #03f;
    color: #f90;
    border: 0;
  }
`;
