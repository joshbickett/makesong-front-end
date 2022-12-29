import { NavigationMenu } from "../components/NavigationMenu";
import { MakeSong } from "../components/MakeSong";
import styled from "@emotion/styled";
import { saveEmail } from "../api/api";
import { useState } from "react";
import { LoginButton } from "../components/LoginButton";

const Home = () => {
  // https://static.videezy.com/system/resources/previews/000/041/219/original/81.Audio_Visualizer_with_note.mp4
  //stackoverflow.com/questions/49822790/html5-video-autoplay-not-working

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showAccessView, setShowAccessView] = useState(false);
  const [showWaitlistView, setShowWaitlistView] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  const save = async () => {
    // if email is formatted like an email address then save it
    if (email.includes("@")) {
      const results = await saveEmail(email);
      console.log("result: ", results);
      if (results?.success) {
        setSuccessMessage(
          "Your email has been saved! We will notify you when access is available"
        );
        setErrorMessage("");
      } else {
        setErrorMessage("hmm, something went wrong");
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      }
    } else {
      setErrorMessage("Uh, that doesn't look like an email");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  const checkCode = () => {
    console.log("checkaccess");
    if (code === "BuildThingsAndHaveFun123") {
      console.log("grant access");
      setAccessGranted(true);
    } else {
      setErrorMessage("Uh, that access code looks like it isn't valid");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <Container>
      <NavigationMenu currentPage={"Home"} />
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Title>Make a song sample using AI!</Title>

            {!!errorMessage && (
              <div
                style={{
                  backgroundColor: "#ffffe7",
                  border: "1px solid #8a8a00",
                  color: "#575700",
                  borderRadius: "5px",
                }}
              >
                {errorMessage}
              </div>
            )}
            {!!successMessage && (
              <div
                style={{
                  backgroundColor: "#d8ffd8",
                  border: "1px solid #009d00",
                  color: "#006200",
                  borderRadius: "5px",
                }}
              >
                {successMessage}
              </div>
            )}

            {showWaitlistView && !successMessage && (
              <div class="form-group">
                <WaitlistInput
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}

            {showAccessView && !accessGranted && !successMessage && (
              <div class="form-group">
                <AccessInput
                  type="email"
                  class="form-control"
                  placeholder="Enter code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            )}

            {!showAccessView && !showWaitlistView && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {/* <StyledButton
                  style={{ margin: "10px" }}
                  onClick={() => setShowWaitlistView(true)}
                >
                  JOIN WAITLIST
                </StyledButton>
                <StyledButton
                  style={{ margin: "10px" }}
                  onClick={() => setShowAccessView(true)}
                >
                  ENTER ACCESS CODE
                </StyledButton> */}
                <SubTitle>
                  This project is in progress. If you want to help, reach out to
                  me on <a href="https://twitter.com/josh_bickett">Twitter</a>.
                </SubTitle>
              </div>
            )}
            {showWaitlistView && !successMessage && (
              <StyledButton onClick={() => save()}>JOIN WAITLIST</StyledButton>
            )}

            {showAccessView && !accessGranted && !successMessage && (
              <StyledButton onClick={() => checkCode()}>
                ENTER ACCESS CODE
              </StyledButton>
            )}

            {accessGranted && !successMessage && (
              <MakeSong setSuccessMessage={setSuccessMessage} />
            )}
            {/* <LoginButton /> */}

            <AnimationContainer>
              <video width="400" height="300" autoPlay loop muted playsinline>
                <source
                  type="video/mp4"
                  src="https://static.videezy.com/system/resources/previews/000/041/219/original/81.Audio_Visualizer_with_note.mp4"
                />
              </video>
            </AnimationContainer>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12" style={{ marginTop: "100px" }}>
          <div>Copyright 2022</div>
          <Attribution>
            <a
              href="https://www.flaticon.com/free-icons/music"
              title="music icons"
              style={{ display: "block" }}
            >
              Music icons created by Freepik - Flaticon
            </a>
            <a
              href="https://www.videezy.com/music-related/"
              title="music icons"
              style={{ display: "block" }}
            >
              Video at Videezy available under free license
            </a>
          </Attribution>
        </div>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  font-family: courier prime, monospace;
  background-color: black;
  color: white;
`;

const AnimationContainer = styled.div`
  padding: 10px;
`;

const Attribution = styled.div`
  font-size: 10px;
  margin: 10px;
`;

const Title = styled.h1`
  margin-top: 150px;
`;

const SubTitle = styled.h6`
  margin-top: 50px;
`;

const WaitlistInput = styled.input`
  resize: none;
  border-radius: 5px;
  background-color: #373737;
  margin-top: 15px;
  color: white;
  padding: 10px 0;
  font-size: 16px;
  height: 40px;
  width: 250px;
  cursor: text;
  text-align: center;
  margin: 20px;
  border: 1px solid #373737;
`;

const AccessInput = styled.input`
  resize: none;
  border-radius: 5px;
  background-color: #373737;
  margin-top: 15px;
  color: white;
  padding: 10px 0;
  font-size: 16px;
  height: 40px;
  width: 250px;
  cursor: text;
  text-align: center;
  margin: 20px;
  border: 1px solid #373737;
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
