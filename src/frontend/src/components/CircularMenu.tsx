import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SettingsButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.theme.gradients.primary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  box-shadow: ${props => props.theme.shadows.button};
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 179, 102, 0.4);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0) translate(-50%, -50%);
  }
  to {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
  to {
    opacity: 0;
    transform: scale(0) translate(-50%, -50%);
  }
`;

const MenuOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const MenuItemsContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen', 'isClosing'].includes(prop),
})<{ isOpen: boolean; isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  display: ${props => props.isOpen || props.isClosing ? 'block' : 'none'};
  animation: ${props => props.isClosing ? slideOut : slideIn} 0.3s ease-out;
  z-index: 8;
`;

const MenuItem = styled.button.withConfig({
  shouldForwardProp: (prop) => !['angle', 'delay', 'centerX', 'centerY'].includes(prop),
})<{ angle: number; delay: number; centerX: number; centerY: number }>`
  position: fixed;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.theme.gradients.accent};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  box-shadow: ${props => props.theme.shadows.button};
  transition: all 0.3s ease;
  pointer-events: auto;
  
  /* Position items in a circle around the center */
  left: ${props => props.centerX + Math.cos((props.angle - 90) * Math.PI / 180) * 80 - 24}px;
  top: ${props => props.centerY + Math.sin((props.angle - 90) * Math.PI / 180) * 80 - 24}px;
  
  animation: menuItemAppear 0.4s ease-out ${props => props.delay}s both;
  
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 179, 102, 0.4);
  }
  
  @keyframes menuItemAppear {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

interface CircularMenuProps {
  className?: string;
}

const CircularMenu: React.FC<CircularMenuProps> = ({ className }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });

  const menuItems = [
    { 
      icon: '👨‍👩‍👧‍👦', 
      label: 'Manage Children', 
      action: () => navigate('/children-manager'),
      angle: -90 // Top
    },
    { 
      icon: '📚', 
      label: 'Custom Story', 
      action: () => navigate('/custom-story'),
      angle: 30 // Top right
    },
    { 
      icon: '🏠', 
      label: 'Dashboard Menu', 
      action: () => navigate('/dashboard'),
      angle: 150 // Bottom left
    }
  ];

  const handleToggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setCenterPos({ x: centerX, y: centerY });

    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const handleItemClick = (action: () => void) => {
    action();
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOverlayClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <MenuContainer className={className}>
      <SettingsButton onClick={handleToggleMenu} aria-label="Settings Menu">
        ⚙️
      </SettingsButton>
      
      <MenuOverlay isOpen={isOpen} onClick={handleOverlayClick} />
      
      <MenuItemsContainer isOpen={isOpen} isClosing={isClosing}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.label}
            angle={item.angle}
            delay={index * 0.1}
            centerX={centerPos.x}
            centerY={centerPos.y}
            onClick={() => handleItemClick(item.action)}
            title={item.label}
            aria-label={item.label}
          >
            {item.icon}
          </MenuItem>
        ))}
      </MenuItemsContainer>
    </MenuContainer>
  );
};

export default CircularMenu;