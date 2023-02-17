import {
  mdiCloudSync,
  mdiFileDocument,
  mdiNote,
  mdiPlusBox,
  mdiPuzzle,
  mdiRssBox,
} from "@mdi/js";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ActionCard from "../../components/ActionCard";
import CreateNewActionModal from "../../components/CreateNewActionModal";
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
      document: mdiFileDocument,
      note: mdiNote,
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
      feeds: mdiRssBox,
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
      actionType: "createNew",
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
      type: "document",
      description: "book 1 description",
      id: "book-discussing-design-1",
      url: "/book-reviews/discussing-design",
    },
    {
      name: "Note for design",
      type: "note",
      description: "Note 2 description",
      id: "note-community-discussion-2",
    },
  ],
  tutorials: [
    {
      name: "Tutorial 1",
      type: "feeds",
      description: "Tutorial 1 description",
      id: "tutorial-1",
    },
    {
      name: "Tutorial 2",
      type: "feeds",
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
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoriesActions = [
    {
      createNew: () => setIsModalOpen(true),
    },
  ];

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
                onClick={
                  item.actionType ? categoriesActions[0][item.actionType] : null
                }
                linkTo={item.url || undefined}
              />
            ))}
          </StyledCardWrapper>
        </StyledSection>
      ))}
      <CreateNewActionModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Home;
