import React from 'react';
import {
  ContactContainer,
  ContactCard,
  CardTitle,
  CardAddress,
  Divider,
  MapButton,
  ProgramInfo,
  ProgramItem,
  PhoneInfo,
} from './Contact.styled';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactCard>
        <CardTitle>Laborator</CardTitle>
        <CardAddress>Str. Progresul, nr. 22, Băilești, jud. Dolj</CardAddress>
        <Divider />
        <ProgramInfo>
          <ProgramItem>Luni - Vineri</ProgramItem>
          <ProgramItem>08:00 - 21:00</ProgramItem>
          <ProgramItem>Sâmbătă - Duminică</ProgramItem>
          <ProgramItem>08:00 - 21:00</ProgramItem>
        </ProgramInfo>
        <Divider />
        <PhoneInfo href="tel:+40251313730">Telefon: 0251.313.730</PhoneInfo>
        <Divider />
        <MapButton
          onClick={() =>
            window.open('https://maps.app.goo.gl/3dz2a6J9Uzp8kjr7A', '_blank')
          }
        >
          Vezi harta
        </MapButton>
      </ContactCard>
      <ContactCard>
        <CardTitle>Cofetărie</CardTitle>
        <CardAddress>
          Str. Victoriei, nr. 101 B, Băilești, jud. Dolj
        </CardAddress>
        <Divider />
        <ProgramInfo>
          <ProgramItem>Luni - Sâmbătă</ProgramItem>
          <ProgramItem>07:00 - 19:00</ProgramItem>
          <ProgramItem>Duminică</ProgramItem>
          <ProgramItem>08:00 - 14:00</ProgramItem>
        </ProgramInfo>
        <Divider />
        <PhoneInfo href="tel:+40351170216">Telefon: 0351.170.216</PhoneInfo>
        <Divider />
        <MapButton
          onClick={() =>
            window.open('https://maps.app.goo.gl/SCtySHYXJRvkqKcf9', '_blank')
          }
        >
          Vezi harta
        </MapButton>
      </ContactCard>
    </ContactContainer>
  );
};

export default Contact;
