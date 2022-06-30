import NavigationMenu from "../components/NavigationMenu";
import styled from "@emotion/styled";
import { saveEmail } from "../api/api";
import { useState } from "react";
import { LoginButton } from "../components/LoginButton";

const Home = () => {
  // https://static.videezy.com/system/resources/previews/000/041/219/original/81.Audio_Visualizer_with_note.mp4
  //stackoverflow.com/questions/49822790/html5-video-autoplay-not-working

  const [email, setEmail] = useState("");
  const [notEmail, setNotEmail] = useState(false);
  const [emailSaved, setEmailSaved] = useState(false);

  const save = async () => {
    // if email is formatted like an email address then save it
    if (email.includes("@")) {
      const result = await saveEmail(email);
      // console.log("result: ", result);
      if (result.success) {
        setEmailSaved(true);
        setNotEmail(false);
        setTimeout(() => {
          setEmailSaved(false);
        }, 4000);
      }
    } else {
      setNotEmail(true);
      setTimeout(() => {
        setNotEmail(false);
      }, 2000);
    }
  };
  return (
    <Container>
      <NavigationMenu currentPage={"Home"} />
      <div class="fluid-container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <Title>Make a song using AI!</Title>
            {notEmail && (
              <div
                style={{
                  backgroundColor: "#ffffe7",
                  border: "1px solid #8a8a00",
                  color: "#575700",
                  borderRadius: "5px",
                }}
              >
                Uh, that doesn't look like an email{" "}
              </div>
            )}
            {emailSaved && (
              <div
                style={{
                  backgroundColor: "#d8ffd8",
                  border: "1px solid #009d00",
                  color: "#006200",
                  borderRadius: "5px",
                }}
              >
                Your email has been saved! We will notify you when access is
                available.
              </div>
            )}

            <div class="form-group">
              <WaitlistTextarea
                type="email"
                class="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button onClick={() => save()}>JOIN WAITLIST</Button>
            <LoginButton />

            <AnimationContainer>
              <video width="400" height="300" autoPlay loop muted playsinline>
                <source
                  type="video/mp4"
                  src="https://static.videezy.com/system/resources/previews/000/041/219/original/81.Audio_Visualizer_with_note.mp4"
                />
              </video>
            </AnimationContainer>
          </div>
          <div class="col-md-3"></div>
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

const Title = styled.h2`
  margin-top: 150px;
`;

const WaitlistTextarea = styled.input`
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

const Button = styled.button`
  height: 40px;
  width: 175px;
  font-size: 16px;
  border-radius: 5px;
  margin: 0 auto;
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
