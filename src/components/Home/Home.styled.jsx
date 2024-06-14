import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to top, pink, white);
  font-family: 'Merienda', cursive;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-left: 50px;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 20px;
  margin-right: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-right: 50px;
    cursor: pointer;
  }
`;

export const HamburgerIcon = styled(FaBars)`
  font-size: 24px;
  color: #333;
`;

export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  position: absolute;
  top: 60px;
  right: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 8px;
`;

export const MobileMenuItem = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

export const VideoSection = styled.section`
  width: 100%;
  margin: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const VideoContainer = styled.div`
  width: 95%;
  height: 50vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  flex-direction: column;

  @media (max-width: 768px) {
    order: 3;
    margin-bottom: 20px;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const AboutText = styled.div`
  flex: 1;
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  padding-right: 20px;

  p {
    text-indent: 1em;
    text-align: justify;
    position: relative;
  }

  p::first-letter {
    font-size: 200%;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    order: 3;
  }
`;

export const CakeImage = styled.img`
  width: 100px;
  height: auto;
  flex-shrink: 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    order: 2;
    margin-bottom: 20px;
  }

  @media (min-width: 769px) {
    margin-left: 20px;
    margin-bottom: 0;
  }
`;
