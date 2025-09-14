import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Decorations = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

const Moon = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.moon};
  border-radius: 50%;
  opacity: 0.6;
  animation: ${float} 4s ease-in-out infinite;
  box-shadow: 0 0 20px rgba(255, 201, 71, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    right: 8px;
    width: 25px;
    height: 25px;
    background: ${props => props.theme.colors.background};
    border-radius: 50%;
    opacity: 0.3;
  }
`;

const Diamond = styled.div`
  position: absolute;
  top: 25%;
  left: 20%;
  width: 12px;
  height: 12px;
  background: ${props => props.theme.colors.diamond};
  transform: rotate(45deg);
  opacity: 0.5;
  animation: ${rotate} 8s linear infinite;
`;

const Star = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${props => props.theme.colors.star};
  border-radius: 50%;
  opacity: 0.7;
  animation: ${float} 3s ease-in-out infinite;
  
  &::before {
    content: '✦';
    position: absolute;
    top: -4px;
    left: -4px;
    font-size: 16px;
    color: ${props => props.theme.colors.star};
  }
`;

const Star1 = styled(Star)`
  top: 8%;
  left: 10%;
  animation-delay: 0s;
`;

const Star2 = styled(Star)`
  top: 35%;
  right: 25%;
  animation-delay: 1s;
`;

const Star3 = styled(Star)`
  bottom: 30%;
  left: 15%;
  animation-delay: 2s;
`;

const Star4 = styled(Star)`
  bottom: 15%;
  right: 30%;
  animation-delay: 0.5s;
`;

const BackgroundDecorations: React.FC = () => {
  return (
    <Decorations>
      <Moon />
      <Diamond />
      <Star1 />
      <Star2 />
      <Star3 />
      <Star4 />
    </Decorations>
  );
};

export default BackgroundDecorations;