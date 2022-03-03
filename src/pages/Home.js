import NavigationMenu from "../components/NavigationMenu";
import styled from "@emotion/styled";

const Home = () => {
  // https://static.videezy.com/system/resources/previews/000/041/219/original/81.Audio_Visualizer_with_note.mp4
  //stackoverflow.com/questions/49822790/html5-video-autoplay-not-working
  https: return (
    <Container>
      <NavigationMenu />
      <AnimationContainer>
        <div style={{ marginBottom: "-40px" }}>COMING SOON</div>
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
            href="https://www.videezy.com/music-related/41219-music-equalizer-for-music-party"
            title="music icons"
            style={{ display: "block" }}
          >
            Video at Videezy available under free license
          </a>
        </Attribution>
      </Footer>
    </Container>
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
  margin: 0;
  font-size: 30px;
  position: absolute;
  width: 100%;
  top: 60%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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
