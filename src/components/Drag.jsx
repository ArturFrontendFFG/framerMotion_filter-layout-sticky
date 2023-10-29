import { motion } from "framer-motion";
import styled from "styled-components";
const StyledParent = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9738fb;
  border: 1px solid black;
`;

const StyledChild = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 25px;
  border: 1px solid black;
  cursor: pointer;
`;

export const Drag = (props) => {
  return (
    <StyledParent>
      <StyledChild
        drag
        dragConstraints={{
          top: -150,
          left: -150,
          right: 150,
          bottom: 150,
        }}
      />
    </StyledParent>
  );
};
