import { mdiCloudSync, mdiPlus } from "@mdi/js";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import CreateNewActionModal from "../CreateNewActionModal";
import {
  LeftSidebarToggleButton,
  RightSidebarToggleButton,
} from "../Sidebar/SidebarToggleAction";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 18px;
  gap: 10px;
  height: 46px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  background-color: ${(props) => props.theme.headerBackgroundColor};
  color: ${(props) => props.theme.headerTextColor};
  border-bottom: 1px solid #343434;
`;

const StyledLeftCol = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRightCol = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledLeftCol>
        Zotero
        <LeftSidebarToggleButton />
      </StyledLeftCol>
      <StyledRightCol>
        <RightSidebarToggleButton />
        <Button
          variant="secondary"
          size="xs"
          leftIcon={mdiCloudSync}
          iconSize={0.8}
        >
          Sync
        </Button>
        <Button
          variant="primary"
          size="xs"
          leftIcon={mdiPlus}
          iconSize={0.8}
          onClick={() => setIsModalOpen(true)}
        >
          Add New
        </Button>
        <CreateNewActionModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </StyledRightCol>
    </StyledHeader>
  );
}
