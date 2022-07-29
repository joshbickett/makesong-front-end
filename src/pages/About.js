import { NavigationMenu } from "../components/NavigationMenu";
import styled from "@emotion/styled";

const About = () => {
  return (
    <Container>
      <NavigationMenu currentPage={"About"} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Title>
            Makesong.ai is a fork of{" "}
            <a href="https://github.com/openai/jukebox/">Jukebox</a>
          </Title>
          <AnimationContainer>
            <video width="400" height="300" autoPlay loop muted>
              <source
                type="video/mp4"
                src="https://static.videezy.com/system/resources/previews/000/041/236/original/84.Music-note-equalizer.mp4"
              />
            </video>
          </AnimationContainer>
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

export default About;

const Container = styled.div`
  font-family: courier prime, monospace;
  background-color: black;
  color: white;
`;

const AnimationContainer = styled.div`
  margin-top: 150px;
  font-size: 30px;
  top: 60%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const Attribution = styled.div`
  font-size: 10px;
  margin: 10px;
`;

const Title = styled.h2`
  margin-top: 150px;
`;
