import NavigationMenu from "../components/NavigationMenu";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <Container>
      <NavigationMenu />
      <AnimationContainer>COMING SOON</AnimationContainer>
      <Footer>
        <div>Copyright 2022</div>
        <Attribution>
          <a
            href="https://www.flaticon.com/free-icons/music"
            title="music icons"
          >
            Music icons created by Freepik - Flaticon
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
  top: 50%;
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
