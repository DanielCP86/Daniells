import React, { useState } from 'react';
import {
  HomeContainer,
  Header,
  Logo,
  Menu,
  MenuItem,
  HamburgerMenu,
  HamburgerIcon,
  MobileMenu,
  MobileMenuItem,
  VideoSection,
  VideoContainer,
  StyledVideo,
  AboutSection,
  AboutText,
  CakeImage,
} from './Home.styled';
import cakeImage from '../../assets/cake.png';
import videoSrc from '../../assets/video.mp4';
import logo from '../../assets/logo.png';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HomeContainer>
      <Header>
        <Logo src={logo} alt="Logo" />
        <Menu>
          <MenuItem href="#">Acasă</MenuItem>
          <MenuItem href="#">Despre noi</MenuItem>
          <MenuItem href="#">Produsele noastre</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
        </Menu>
        <HamburgerMenu onClick={toggleMenu}>
          <HamburgerIcon />
        </HamburgerMenu>
      </Header>
      {isMenuOpen && (
        <MobileMenu>
          <MobileMenuItem href="#">Acasă</MobileMenuItem>
          <MobileMenuItem href="#">Despre noi</MobileMenuItem>
          <MobileMenuItem href="#">Produsele noastre</MobileMenuItem>
          <MobileMenuItem href="#">Contact</MobileMenuItem>
        </MobileMenu>
      )}
      <VideoSection>
        <VideoContainer>
          <StyledVideo src={videoSrc} autoPlay loop muted />
        </VideoContainer>
      </VideoSection>
      <AboutSection>
        <AboutText>
          <p>
            Bine ați venit la cofetăria noastră, unde fiecare prăjitură este
            făcută cu dragoste și pasiune. Folosim doar cele mai bune
            ingrediente pentru a crea delicii care îți vor încânta simțurile.
            Vino și descoperă gustul adevărat al fericirii într-o felie de tort.
            Echipa noastră este formată din cofetari talentați și dedicați, care
            pun suflet în fiecare desert pe care îl creează. Ne asigurăm că
            fiecare produs este proaspăt și de cea mai bună calitate. Ne dorim
            ca fiecare client să se simtă special și să se bucure de o
            experiență de neuitat în cofetăria noastră. Vă așteptăm cu drag să
            savurați un moment dulce în compania noastră, să împărtășiți bucuria
            unei prăjituri bine făcute și să creați amintiri de neuitat alături
            de cei dragi. La cofetăria noastră, fiecare zi este o sărbătoare a
            gustului și a rafinamentului.
          </p>
        </AboutText>
        <CakeImage src={cakeImage} alt="Imagine Cofetărie" />
      </AboutSection>
    </HomeContainer>
  );
};

export default Home;
