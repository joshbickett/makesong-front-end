import styled from "@emotion/styled";

const NavigationMenu = () => {
  // https://www.videezy.com/music-related/41219-music-equalizer-for-music-party
  // https://medium.com/geekculture/6-top-popular-react-js-animation-libraries-in-2021-e6ea75bb6fcd
  return (
    <Container>
      <Brand>makesong.ai</Brand>
      <NavigationItem>The Technology</NavigationItem>
      <NavigationItem>Join waitlist</NavigationItem>
      <NavigationItem>The App</NavigationItem>
      <AnimationContainer>COMING SOON</AnimationContainer>
    </Container>
  );
};

export default NavigationMenu;

const Container = styled.div`
  margin: 0;
  width: 100%;
  min-height: 20px;
  border-bottom: 1px solid white;
`;

const Brand = styled.div`
  font-size: 35px;
  width: 100%;
`;

const NavigationItem = styled.div`
  font-size: 30px;
  border: 1px solid white;
  width: 350px;
  float: right;
  &:hover {
    background-color: #f0c;
    color: #fff;
  }
  &:active {
    background-color: #03f;
    color: #f90;
  }
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
