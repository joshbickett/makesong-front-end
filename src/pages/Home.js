import NavigationMenu from "../components/NavigationMenu";
import styled from "@emotion/styled";

const Home = () => {
  // https://static.videezy.com/system/resources/previews/000/041/219/original/81.Audio_Visualizer_with_note.mp4
  //stackoverflow.com/questions/49822790/html5-video-autoplay-not-working
  return (
    <div>
      <Container>
        <NavigationMenu currentPage={"Home"} />
        <ContentContainer>
          <Title>Make a song in a few minutes using AI</Title>
          <div>Sign up below to be added to the waitlist</div>
          <WaitlistContainer>
            <WaitlistTextarea autofocus placeholder="Your email address" />
            <Button>JOIN WAITLIST</Button>
          </WaitlistContainer>
        </ContentContainer>
        <AnimationContainer>
          <video width="400" height="300" autoPlay loop muted>
            <source
              type="video/mp4"
              src="https://static.videezy.com/system/resources/previews/000/041/219/original/81.Audio_Visualizer_with_note.mp4"
            />
          </video>
        </AnimationContainer>

        <Footer>
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
        </Footer>
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  font-family: courier prime, monospace;
  background-color: black;
  color: white;
`;

const AnimationContainer = styled.div`
  padding: 10px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  color: white;
`;

const Attribution = styled.div`
  font-size: 10px;
  margin: 10px;
`;

const ContentContainer = styled.div`
  display: block;
  padding: 5px;
  margin-top: 80px;
`;

const Title = styled.h2`
  display: block;
  padding: 5px;
`;

const WaitlistTextarea = styled.textarea`
  margin: 10px;
  resize: none;
  border-radius: 5px;
  background-color: #373737;
  margin-top: 20px;
  color: white;
  padding: 10px 0;
  font-size: 16px;
  height: 20px;
  width: 250px;
  cursor: text;
  text-align: center;
`;

const Button = styled.button`
  height: 40px;
  width: 175px;
  font-size: 16px;
  border-radius: 5px;
  margin: 0 auto;
  border: 1px solid white;
  font-weight: bold;
  display: block;
  &:hover {
    background-color: #f0c;
    color: #fff;
  }
  &:active {
    background-color: #03f;
    color: #f90;
  }
`;

const WaitlistContainer = styled.div`
  padding: 0;
  width: 500px;
  margin: 0 auto;
`;
