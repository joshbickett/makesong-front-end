import { make } from "../api/api";
import { useState } from "react";
import styled from "@emotion/styled";

export const MakeSong = ({ setSuccessMessage }) => {
  const [lyrics, setLyrics] = useState("");
  const [artist, setArtist] = useState("The Beatles");

  const genreLookup = {
    "The Beatles": "Rock",
    "Frank Sinatra": "Classic Pop",
    "Beyoncé": "R&B",
    "Elton John": "	Pop Rock",
    "Nas": "Hip Hop",
    "Dolly Parton": "Country",
    "Nicki Minaj": "Hip Hop",
    "Enrique Iglesias": "Pop",
    "Ella Fitzgerald": "Jazz",
  };

  const makeSong = async () => {
    setSuccessMessage(
      "Your song was submitted and the AI is working on it! We'll notify you by email once complete"
    );
    const genre = genreLookup[artist];
    const results = await make({ lyrics, artist: artist, genre: genre });
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
      <div>Choose artist to model your song after</div>
      <select
        name="artist"
        id="artist"
        onChange={(e) => setArtist(e.target.value)}
        style={{ margin: "10px", backgroundColor: "black", color: "white" }}
      >
        <option value="The Beatles"> The Beatles</option>
        <option value="Frank Sinatra">Frank Sinatra</option>
        <option value="Beyoncé">Beyoncé</option>
        <option value="Elton John">Elton John</option>
        <option value="Nas">Nas</option>
        <option value="Dolly Parton">Dolly Parton</option>
        <option value="Nicki Minaj">Nicki Minaj</option>
        <option value="Enrique Iglesias">Enrique Iglesias</option>
        <option value="Ella Fitzgerald">Ella Fitzgerald</option>
      </select>

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
