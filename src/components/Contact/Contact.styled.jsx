import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 40px;
  margin: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 600px;

  @media (min-width: 768px) {
    margin: 20px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 40px;
  color: #ff3383;
  text-transform: uppercase;
`;

export const CardAddress = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
`;

export const PhoneInfo = styled.a`
  font-size: 1em;
  color: #555;
  margin: 10px 0;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProgramInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProgramItem = styled.p`
  font-size: 1em;
  color: #555;
  &:nth-child(odd) {
    color: #333; /* Culoare pentru paragrafele impare */
  }

  &:nth-child(even) {
    color: #ff3383; /* Culoare pentru paragrafele pare */
  }
  margin: 10px 0;
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #ddd;
  margin: 30px 0;
`;

export const MapButton = styled.button`
  background-color: #ff3383;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff33c6;
  }
`;
