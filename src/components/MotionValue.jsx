import styled from "styled-components";
import { StickyHeader } from "./StickyHeader";
import { useTransform, motion, useScroll } from "framer-motion";

export const MotionValue = (props) => {
  const { scrollY } = useScroll();

  const offsetY = [0, 300];
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <div style={{ position: "relative" }}>
      <StickyHeader offsetY={offsetY} scrollY={scrollY} />

      <StyledSection color="maroon" style={marginTop}>
        <h1>Hello StackBlitz</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          recusandae.
        </p>
      </StyledSection>
      <StyledSection className="section" color="peru">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum id
        excepturi ullam, nesciunt reiciendis distinctio sint cumque! Quasi, vel
        ipsam neque hic nam atque officia error, laudantium vitae quos ratione.
      </StyledSection>
    </div>
  );
};

const StyledSection = styled(motion.div)`
  height: 100vh;
  padding: 3rem 1rem; 
  color: white;
  background-color: ${({ color }) => color || "#fff"};
`;
