import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TabItem = styled.div`
  padding: 18px;
  letter-spacing: -2%;
  color: ${(props) =>
    props.active
      ? props.theme.colors[props.theme.mode].text
      : props.theme.colors[props.theme.mode].secondaryText};
  cursor: pointer;
`;

const TabContent = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
`;

const Tab = ({ children, active, onClick, defaultActiveTab }) => {
  return (
    <TabItem active={active} onClick={onClick}>
      {children}
    </TabItem>
  );
};

const Tabs = ({ children, defaultActiveTab }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveTab);

  const handleTabClick = (active) => {
    setActiveTabIndex(active);
  };

  const tabItems = children
    .map((child, index) => {
      return child.map((innerChild, innerIndex) => {
        return (
          <Tab
            active={innerChild.props.tabid === activeTabIndex}
            onClick={() => handleTabClick(innerChild.props.tabid)}
            key={index + "_tab"}
            defaultActiveTab={defaultActiveTab}
          >
            {innerChild.props.title}
          </Tab>
        );
      });
    })
    .flat();

  const tabContents = React.Children.map(children, (child, index) => {
    return (
      <TabContent active={child.props.tabid === activeTabIndex}>
        {React.cloneElement(child, {
          active: child.props.tabid === activeTabIndex,
        })}
      </TabContent>
    );
  });

  return (
    <Container>
      <TabsContainer>{tabItems}</TabsContainer>
      {tabContents}
    </Container>
  );
};

export default Tabs;
