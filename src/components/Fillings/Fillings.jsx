import React, { useState, useEffect } from 'react';
import {
  FillingsContainer,
  IntroMessage,
  AlergenWarning,
  FillingCard,
  FillingName,
  FillingIngredients,
  FillingDetails,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from './Fillings.styled';
import { fillings, removeDiacritics } from '../../data/fillings';

const Fillings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedFillings, setdisplayedFillings] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedFilling, setselectedFilling] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        setVisibleCount(prevCount => prevCount + 10);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const filtered = fillings.filter(
      comp =>
        removeDiacritics(comp.name.toLowerCase()).includes(
          removeDiacritics(searchTerm.toLowerCase())
        ) ||
        removeDiacritics(comp.ingredients.toLowerCase()).includes(
          removeDiacritics(searchTerm.toLowerCase())
        )
    );
    setdisplayedFillings(filtered.slice(0, visibleCount));
  }, [searchTerm, visibleCount]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setVisibleCount(10);
  };

  const handleClick = comp => {
    setselectedFilling(comp);
  };

  return (
    <FillingsContainer>
      <IntroMessage>
        Alegeți compoziția preferată pentru torturile dvs. din lista de mai jos.
      </IntroMessage>
      <AlergenWarning>
        Atenție! Produsele noastre pot conține următoarele tipuri de alergeni:
        gluten, ouă, lactoză, lecitină din soia, fructe cu coajă, arahide,
        lapte, grăsimi vegetale, stabilizatori (E460, E466, E340), regulator de
        aciditate (E501), emulsifianți (E427b, E222), coloranți (E1600, E133),
        lecitină (E322), ester (E472), acid citric (E330), citrogliceride
        (E472c), aditiv alimentar pectina (E440).
      </AlergenWarning>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Caută după nume sau ingrediente..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchContainer>
      {displayedFillings.map(comp => (
        <FillingCard key={comp.id} onClick={() => handleClick(comp)}>
          <FillingName>{comp.name}</FillingName>
          <FillingIngredients>
            <strong>Ingrediente: </strong>
            {comp.ingredients}
          </FillingIngredients>
          {selectedFilling && selectedFilling.id === comp.id && (
            <FillingDetails>
              <p>
                <strong>Valori nutriționale medii pentru 100 g: </strong>{' '}
                {comp.nutritionValues}
              </p>
              <br></br>
              <p>
                <strong>Atenționări: </strong> {comp.warnings}
              </p>
              <br></br>
              <p>
                <strong>Condiții de depozitare: </strong>{' '}
                {comp.storageConditions}
              </p>
            </FillingDetails>
          )}
        </FillingCard>
      ))}
    </FillingsContainer>
  );
};

export default Fillings;
