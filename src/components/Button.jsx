import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBtn = styled(motion.div)`
  border: none;
  outline: none;
  padding: 12px 16px;
  color: #000;
  background-color: #f1f1f1;
  cursor: pointer;
`;

export const Button = (props) => {
  const { text, handleClick } = props;
  return (
    <div>
      <StyledBtn
      layout
        whileHover={{ backgroundColor: "#ccc" }}
        whileTap={{ backgroundColor: "#ddd" }}
        onClick={handleClick}
      >
        {text}
      </StyledBtn>
    </div>
  );
};
