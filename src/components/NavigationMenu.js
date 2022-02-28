import styled from "@emotion/styled";
import MusicIcon from "../assets/musical-note.png";
import "../App.css";

const NavigationMenu = () => {
  // https://www.videezy.com/music-related/41219-music-equalizer-for-music-party
  // https://medium.com/geekculture/6-top-popular-react-js-animation-libraries-in-2021-e6ea75bb6fcd
  // https://medium.com/hackernoon/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf
  return (
    <div>
      <Brand>
        <Icon src={MusicIcon} />
        <Header>makesong.ai</Header>
      </Brand>
      <NavigationContainer>
        <NavigationItem>The Technology</NavigationItem>
        <NavigationItem>Join waitlist</NavigationItem>
        <NavigationItem>The App</NavigationItem>
      </NavigationContainer>
    </div>
  );
};

export default NavigationMenu;

const NavigationContainer = styled.div`
  width: 75vw;

  float: right;
`;

const Brand = styled.div`
  font-size: 35px;
  width: 350px;

  margin: 0;
  float: left;
`;

const Header = styled.div`
  font-size: 35px;
  display: inline-block;
  width: 275px;
  margin: 0 auto;
`;

const NavigationItem = styled.div`
  font-size: 25px;
  border: 1px solid white;
  background-color: white;
  margin: 10px;
  color: black;
  line-height: 50px;
  width: 250px;
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
  margin-top: 15px;
  display: inline-block;
`;
