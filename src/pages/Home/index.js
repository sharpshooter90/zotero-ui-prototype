import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ActionCard from "../../components/ActionCard";
import { RightSidebarContext } from "../../context.config";

const StyledCardWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
const StyledSectionTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSizes.lg};
  font-weight: 600;
  letter-spacing: -0.8px;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors[props.theme.mode].text};
`;
const StyledSection = styled.div`
  margin-bottom: 32px; ;
`;
const categories = {
  actions: [
    {
      name: "Add New",
      type: "default",
      description: "Add New Action",
      id: "add-new-1",
    },
    {
      name: "Connect to Web",
      type: "onboardingActions",
      description: "Connect to Web",
      id: "connect-to-web-1",
    },
  ],
  recents: [
    {
      name: "Recent 1",
      type: "recent",
      description: "Recent 1 description",
      id: "recent-1",
    },
    {
      name: "Recent 2",
      type: "recent",
      description: "Recent 2 description",
      id: "recent-2",
    },
  ],
  tutorials: [
    {
      name: "Tutorial 1",
      type: "tutorial",
      description: "Tutorial 1 description",
      id: "tutorial-1",
    },
    {
      name: "Tutorial 2",
      type: "tutorial",
      description: "Tutorial 2 description",
      id: "tutorial-2",
    },
  ],
};

const Home = () => {
  const { isRightSidebarVisible, setIsRightSidebarVisible } =
    useContext(RightSidebarContext);

  useEffect(() => {
    setIsRightSidebarVisible(false);
  }, [setIsRightSidebarVisible]);

  return (
    <div>
      {Object.entries(categories).map(([categoryName, items]) => (
        <StyledSection key={categoryName}>
          <StyledSectionTitle>{categoryName}</StyledSectionTitle>
          <StyledCardWrapper>
            {items.map((item) => (
              <ActionCard key={item.id} title={item.name} />
            ))}
          </StyledCardWrapper>
        </StyledSection>
      ))}
    </div>
  );
};

export default Home;
