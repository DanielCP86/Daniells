import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SidebarWrapper,
  CloseButton,
  SidebarNavItem,
  SidebarSubmenu,
  SidebarSubmenuToggle,
} from './SidebarMenu.styled';

const SidebarMenu = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState({
    products: false,
  });

  const toggleSubmenu = menu => {
    setIsSubmenuOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleNavigation = path => {
    navigate(path);
    toggleMenu();
  };

  return (
    <SidebarWrapper isOpen={isOpen}>
      <CloseButton onClick={toggleMenu}>×</CloseButton>
      <SidebarNavItem onClick={() => handleNavigation('/')}>
        Acasă
      </SidebarNavItem>
      <SidebarNavItem onClick={() => handleNavigation('/about-us')}>
        Despre noi
      </SidebarNavItem>
      <SidebarNavItem>
        Produsele noastre
        <SidebarSubmenuToggle onClick={() => toggleSubmenu('products')}>
          {isSubmenuOpen.products ? '-' : '+'}
        </SidebarSubmenuToggle>
        <SidebarSubmenu isOpen={isSubmenuOpen.products}>
          <SidebarNavItem
            onClick={() => handleNavigation('/products/birthdayCakes')}
          >
            Torturi aniversare
          </SidebarNavItem>
          <SidebarNavItem
            onClick={() => handleNavigation('/products/baptismCakes')}
          >
            Torturi botez
          </SidebarNavItem>
          <SidebarNavItem
            onClick={() => handleNavigation('/products/weddingCakes')}
          >
            Torturi nuntă
          </SidebarNavItem>
        </SidebarSubmenu>
      </SidebarNavItem>
      <SidebarNavItem onClick={() => handleNavigation('/candy-bar')}>
        Candy Bar
      </SidebarNavItem>
      <SidebarNavItem onClick={() => handleNavigation('/fillings')}>
        Compoziții
      </SidebarNavItem>
      <SidebarNavItem onClick={() => handleNavigation('/contact')}>
        Contact
      </SidebarNavItem>
    </SidebarWrapper>
  );
};

export default SidebarMenu;
