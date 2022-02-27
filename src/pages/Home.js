import NavigationMenu from "../components/NavigationMenu";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <Container>
      <NavigationMenu />
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
