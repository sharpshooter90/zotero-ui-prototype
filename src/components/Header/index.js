import {
  mdiCloudSync,
  mdiPlus,
  mdiWhiteBalanceSunny,
  mdiWeatherNight,
} from "@mdi/js";
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Tooltip } from "react-tippy";
import Button from "../Button";
import CreateNewActionModal from "../CreateNewActionModal";
import {
  LeftSidebarToggleButton,
  RightSidebarToggleButton,
} from "../Sidebar/SidebarToggleAction";
import { ZoteroThemeContext } from "../../context.config";
import IconButton from "../IconButton";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 18px;
  gap: 10px;
  height: 46px;

  background-color: ${(props) => props.theme.header.backgroundColor};
  color: ${(props) => props.theme.headerTextColor};
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const StyledLeftCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 260px;
`;

const StyledRightCol = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Get the theme object and toggle function from the context
  const { handleToggleMode, mode } = useContext(ZoteroThemeContext);

  return (
    <StyledHeader>
      <StyledLeftCol>
        Zotero
        <LeftSidebarToggleButton />
      </StyledLeftCol>
      <StyledRightCol>
        <Tooltip
          title={mode === "light" ? "Dark Mode" : "Light Mode"}
          position="top"
          delay={600}
          size="small"
        >
          <IconButton
            iconPath={mode === "light" ? mdiWeatherNight : mdiWhiteBalanceSunny}
            iconSize={0.8}
            onClick={handleToggleMode}
          />
        </Tooltip>
        <Tooltip
          title="Show information about the current page"
          position="top"
          delay={600}
          size="small"
        >
          <RightSidebarToggleButton />
        </Tooltip>

        <Tooltip
          title="Connect to zotero cloud to sync your data"
          delay={600}
          size="small"
        >
          <Button
            variant="secondary"
            size="xs"
            leftIcon={mdiCloudSync}
            iconSize={0.8}
          >
            Sync
          </Button>
        </Tooltip>

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
