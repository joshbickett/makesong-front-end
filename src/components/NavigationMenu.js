import styled from "@emotion/styled";
import MusicIcon from "../assets/musical-note.png";

const NavigationMenu = () => {
  // https://www.videezy.com/music-related/41219-music-equalizer-for-music-party
  // https://medium.com/geekculture/6-top-popular-react-js-animation-libraries-in-2021-e6ea75bb6fcd
  return (
    <Container>
      <Brand>
        <Icon src={MusicIcon} />
        <Header>makesong.ai</Header>
      </Brand>
      <NavigationItem>The Technology</NavigationItem>
      <NavigationItem>Join waitlist</NavigationItem>
      <NavigationItem>The App</NavigationItem>
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
  width: 400px;
  margin: 0 auto;
`;

const Header = styled.div`
  font-size: 35px;
  display: inline-block;
  width: 275px;
  margin: 0 auto;
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

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  display: inline-block;
`;
