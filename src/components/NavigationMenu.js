import styled from "@emotion/styled";

const NavigationMenu = () => {
  return (
    <Container>
      <Brand>Makesong.ai</Brand>
      <NavigationItem>About the project</NavigationItem>
      <NavigationItem>Join waitlist</NavigationItem>
    </Container>
  );
};

export default NavigationMenu;

const Container = styled.div`
  margin: 0;
  width: 100%;
  min-height: 20px;
  border: 1px solid white;
`;

const Brand = styled.div`
  font-size: 35px;
  width: 100%;
`;

const NavigationItem = styled.div`
  font-size: 35px;
  border: 1px solid white;
  width: 20%;
  float: right;
`;
