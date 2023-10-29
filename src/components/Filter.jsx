import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Button } from "./Button";
import { useState } from "react";
import styled from "styled-components";

export const Filter = ({ data }) => {
  const [cards, setCards] = useState(data);

  const buttons = data.reduce(
    (acc, el) => {
      if (acc.includes(el.category)) return acc;

      return [...acc, el.category];
    },
    ["all"]
  );
  const handleFilter = (selector) => {
    if (selector === "all") return setCards(data);
    setCards(data.filter((el) => el.category === selector));
  };
  return (
    <LayoutGroup>
      <motion.div layout style={{ padding: 15 }}>
        <StyledParentWrap>
          {buttons.map((btnTitle) => (
            <Button
              key={btnTitle}
              text={btnTitle}
              handleClick={() => handleFilter(btnTitle)}
            />
          ))}
        </StyledParentWrap>
        <motion.div
          layout
          style={{ overflow: "hidden", marginTop: 40, width: "100%" }}
        >
          <AnimatePresence initial={false} mode="wait">
            {cards.map((card) => (
              <StyledMotionCard
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={card.title}
              >
                {card.title}
              </StyledMotionCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
};

const StyledMotionCard = styled(motion.div)`
  float: left;
  background-color: #2186f2;
  color: #fff;
  width: 100px;
  line-height: 100px;
  text-align: center;
  margin: 2px;
`;

const StyledParentWrap = styled(motion.div)`
  display: "flex";
  width: 100%;
  gap: 15px;
  justify-content: "center";
`;
