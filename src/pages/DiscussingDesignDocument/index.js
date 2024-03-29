import React, { useEffect } from "react";
import styled from "styled-components";
import Tabs from "../../components/Tabs";
import { useSidebar } from "../../context.config";

const StyledContent = styled.div`
  width: 800px;
  margin: 0 auto;
  ul {
    padding-left: 20px;
  }

  p,
  li {
    padding: 3px 2px;
    line-height: 1.4;
  }
`;
const StyledTab = styled.div``;
const StyledTabContent = styled.div`
  padding: 0 18px;
`;

const documentMetadata = {
  info: [
    {
      id: "info",
      tabTitle: "Info",
      tabContent: "Tab Info Content",
    },
  ],
  notes: [
    {
      id: "notes",
      tabTitle: "Notes",
      tabContent: "Tab Notes Content",
    },
  ],
  tags: [
    {
      id: "tags",
      tabTitle: "Tags",
      tabContent: "Tab Tags Content",
    },
  ],
  related: [
    {
      id: "related",
      tabTitle: "Related",
      tabContent: "Tab Related Content",
    },
  ],
};
const rightSidebarContent = (data) => {
  return (
    <Tabs defaultActiveTab="notes">
      {Object.entries(data).map(([key, value]) =>
        value.map((tab, key) => (
          <StyledTab title={tab.tabTitle} tabid={tab.id} key={key}>
            <StyledTabContent>{tab.tabContent}</StyledTabContent>
          </StyledTab>
        ))
      )}
    </Tabs>
  );
};

const DiscussingDesignDocument = () => {
  const {
    setRightSidebarContent,
    resetRightSidebarContent,
    setRightIsSidebarOpen,
  } = useSidebar();

  useEffect(() => {
    // enabling the right sidebar view
    setRightIsSidebarOpen(true);
    // passing the content to right sidebar context
    setRightSidebarContent(rightSidebarContent(documentMetadata));

    return () => {
      resetRightSidebarContent();
    };
  }, []);

  return (
    <StyledContent>
      <h2>Discussing Design</h2>
      <p>
        Book description Real critique has become a lost skill among
        collaborative teams today. Critique is intended to help teams strengthen
        their designs, products, and services, rather than be used to assert
        authority or push agendas under the guise of "feedback." In this
        practical guide, authors Adam Connor and Aaron Irizarry teach you
        techniques, tools, and a framework for helping members of your design
        team give and receive critique. Using firsthand stories and lessons from
        prominent figures in the design community, this book examines the good,
        the bad, and the ugly of feedback. Youâ??ll come away with tips,
        actionable insights, activities, and a cheat sheet for practicing
        critique as a part of your collaborative process. This book covers:
      </p>
      <ul>
        <li>
          Best practices (and anti-patterns) for giving and receiving critique
        </li>
        <li>
          Cultural aspects that influence your ability to critique
          constructively
        </li>
        <li>
          When, how much, and how often to use critique in the creative process
        </li>
        <li>
          Facilitation techniques for making critiques timely and more effective
        </li>
        <li>
          Strategies for dealing with difficult people and challenging
          situations
        </li>
      </ul>
      <p>
        "Discussing Design: Improving Communication and Collaboration Through
        Critique" by Aaron Irizarry and Adam Connor offers a comprehensive guide
        to improving collaboration in design teams through critique. The book
        covers the fundamentals of design critique and criticism, providing
        effective strategies such as how to set the stage for productive
        conversations and how to provide constructive feedback. It also includes
        advice on how to receive feedback, establish trust between team members,
        and manage difficult conversations. By following the strategies outlined
        in this book, design teams can foster a culture of collaboration and
        communication that leads to better results. #111
      </p>
      <p>
        "Discussing Design: Improving Communication and Collaboration Through
        Critique" by Aaron Irizarry and Adam Connor offers a comprehensive guide
        to improving collaboration in design teams through critique. The book
        covers the fundamentals of design critique and criticism, providing
        effective strategies such as how to set the stage for productive
        conversations and how to provide constructive feedback. It also includes
        advice on how to receive feedback, establish trust between team members,
        and manage difficult conversations. By following the strategies outlined
        in this book, design teams can foster a culture of collaboration and
        communication that leads to better results. #111
      </p>
      <p>
        "Discussing Design: Improving Communication and Collaboration Through
        Critique" by Aaron Irizarry and Adam Connor offers a comprehensive guide
        to improving collaboration in design teams through critique. The book
        covers the fundamentals of design critique and criticism, providing
        effective strategies such as how to set the stage for productive
        conversations and how to provide constructive feedback. It also includes
        advice on how to receive feedback, establish trust between team members,
        and manage difficult conversations. By following the strategies outlined
        in this book, design teams can foster a culture of collaboration and
        communication that leads to better results. #111
      </p>
      <p>
        "Discussing Design: Improving Communication and Collaboration Through
        Critique" by Aaron Irizarry and Adam Connor offers a comprehensive guide
        to improving collaboration in design teams through critique. The book
        covers the fundamentals of design critique and criticism, providing
        effective strategies such as how to set the stage for productive
        conversations and how to provide constructive feedback. It also includes
        advice on how to receive feedback, establish trust between team members,
        and manage difficult conversations. By following the strategies outlined
        in this book, design teams can foster a culture of collaboration and
        communication that leads to better results. #111
      </p>
    </StyledContent>
  );
};

export default DiscussingDesignDocument;
