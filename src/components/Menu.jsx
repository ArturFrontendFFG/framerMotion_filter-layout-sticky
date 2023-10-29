import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
const menuData = ["Short", "Very Looong", "Normal item"];

export const Menu = (props) => {
  const [activeIndex, setActive] = useState(0);
  return (
    <Wrapper>
      {menuData.map((text, idx) => (
        <MenuItem
          key={text}
          text={text}
          isSelected={activeIndex === idx}
          handleClick={() => setActive(idx)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  background: #bfbdbd;
  width: 100%;
  justify-content: center;
  padding: 1rem;
  /* border-radius: 25px; */
`;

const MenuItem = ({ text, isSelected, handleClick }) => {
  return (
    <StyledMotionDiv
      //motion framer не может работать просто с цветами pink blue green работать не будут
      onClick={handleClick}
      initial={{ color: "#04b804" }}
      animate={{ color: isSelected ? "#FF00B6" : "#04b804" }}
    >
      {isSelected && <ActiveLine />}
      {text}
    </StyledMotionDiv>
  );
};

const StyledMotionDiv = styled(motion.div)`
  padding: 0 0.5rem;
  user-select: none;
  font-weight: 900;
  position: relative;
  cursor: pointer;
`;

const ActiveLine = () => {
  return <StyledMotionLine layoutId="activeItem"></StyledMotionLine>;
};

const StyledMotionLine = styled(motion.div)`
  width: 80%;
  height: 4px;
  position: absolute;
  bottom: -6px;
  background: #ff00b6;
`;
