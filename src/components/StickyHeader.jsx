import styled from "styled-components";
import { motion, useTransform } from "framer-motion";

const StyledComponents = styled(motion.header)`
  background-color: #ccc;
  color: white;
  padding: 0.25rem 1rem;
  position: sticky;
  top: 0;
  width: 100%;
  overflow: hidden;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 25px;
  gap: 1rem;
  align-items: center;
`;

export const StickyHeader = ({ offsetY, scrollY }) => {
  const heightSizes = [250, 50];
  const imageSizes = [100, 35];
  const fontSizes = ["40px", "20px"];

  const height = useTransform(scrollY, offsetY, heightSizes);
  const imgWidth = useTransform(scrollY, offsetY, imageSizes);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const pOpacity = useTransform(scrollY, [20, 150], [1, 0]);
  const btnOpacity = useTransform(scrollY, [135, 300], [0, 1]);

  return (
    <StyledComponents style={{ height }}>
      <Flex className="flex">
        <motion.img
          style={{ width: imgWidth }}
          src="https://freepngimg.com/save/7769-strawberry-png-images/500x500"
          alt=""
        />
        <motion.h2 style={{ fontSize }}>Hello Coders!</motion.h2>
        <StyledButton style={{ opacity: btnOpacity }}>Click me</StyledButton>
      </Flex>
      <motion.p style={{ opacity: pOpacity }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti
        velit quod incidunt optio odit tempore, repellat cum facilis aliquid
        odio vitae mollitia veritatis explicabo fugiat aperiam voluptates
        provident rem.
        <StyledButton>Click me</StyledButton>
      </motion.p>
    </StyledComponents>
  );
};

const StyledButton = styled(motion.button)`
  background-color: rosybrown;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  margin-left: auto;
  cursor: pointer;
`;
