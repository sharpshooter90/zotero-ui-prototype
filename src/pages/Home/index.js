import { mdiBook, mdiCloudSync, mdiPlusBox, mdiPuzzle } from "@mdi/js";
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

const categoriesIcons = {
  actions: [
    {
      default: mdiPlusBox,
      onboardingAction_stayInSync: mdiCloudSync,
      onboardingAction_browserExtension: mdiPuzzle,
    },
  ],
  recents: [
    {
      book: mdiBook,
      onboardingAction_stayInSync: mdiCloudSync,
      onboardingAction_browserExtension: mdiPuzzle,
    },
  ],
  actions: [
    {
      default: mdiPlusBox,
      onboardingAction_stayInSync: mdiCloudSync,
      onboardingAction_browserExtension: mdiPuzzle,
    },
  ],
  tutorials: [
    {
      default: mdiPlusBox,
      onboardingAction_stayInSync: mdiCloudSync,
      onboardingAction_browserExtension: mdiPuzzle,
    },
  ],
};
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
      type: "onboardingAction_stayInSync",
      description: "Connect to Web",
      id: "connect-to-web-1",
    },
    {
      name: "Install Browser Extension",
      type: "onboardingAction_browserExtension",
      description: "browser extension setup",
      id: "install-browser-extension-1",
    },
  ],
  recents: [
    {
      name: "Discussing design by Adam Connor",
      type: "book",
      description: "book 1 description",
      id: "book-discussing-design-1",
    },
    {
      name: "Community discussion",
      type: "feeds",
      description: "feeds 2 description",
      id: "feeds-community-discussion-2",
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
              <ActionCard
                key={item.id}
                title={item.name}
                iconPath={categoriesIcons[categoryName][0][item.type]}
                sx={{ minHeight: "140px", minWidth: "306px", flex: 0 }}
              />
            ))}
          </StyledCardWrapper>
        </StyledSection>
      ))}
    </div>
  );
};

export default Home;
