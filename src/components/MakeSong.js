import { make } from "../api/api";
import { useState } from "react";
import styled from "@emotion/styled";

export const MakeSong = ({ setSuccessMessage }) => {
  const [lyrics, setLyrics] = useState("");
  const makeSong = async () => {
    setSuccessMessage(
      "Your song was submitted and the AI is working on it! We'll notify you by email once complete"
    );
    const results = await make(lyrics);
    console.log("results from making song: ", results);

    // if (results?.success) {
    //
    //   setSuccessMessage(
    //     "Your song was submitted and the AI is working on it! We'll notify you by email once complete"
    //   );
    // } else {
    //   // setErrorMessage("hmm, something went wrong");
    //   // setTimeout(() => {
    //   //   setErrorMessage("");
    //   // }, 2000);
    // }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>Write your lyrics below!</div>
      <LyricTextarea
        onChange={(e) => setLyrics(e.target.value)}
        value={lyrics}
      ></LyricTextarea>
      <StyledButton onClick={() => makeSong()}>MAKE SONG</StyledButton>
    </div>
  );
};

const LyricTextarea = styled.textarea`
  border-radius: 5px;
  margin: 10px;
  resize: none;
  width: 400px;
  height: 300px;
  text-align: center;
  background-color: #373737;
  color: white;
`;

const StyledButton = styled.button`
  height: 40px;
  width: 200px;
  font-size: 16px;
  border-radius: 5px;

  border: 0;
  font-weight: bold;
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
