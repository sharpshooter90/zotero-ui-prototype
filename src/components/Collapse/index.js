import React, { useState } from "react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import { Icon } from "@mdi/react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Chevron = styled(Icon)`
  transition: all 0.3s ease-in-out;
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0")});
`;

const Content = styled.div`
  transition: all 0.3s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  width: 100%;
`;

const Collapse = ({ children, easing, position, chevron, isOpen }) => {
  return (
    <Wrapper>
      {chevron && <Chevron path={mdiChevronDown} isOpen={isOpen} />}
      <Content isOpen={isOpen} style={{ transition: `all 0.2s ${easing}` }}>
        {children}
      </Content>
    </Wrapper>
  );
};

Collapse.defaultProps = {
  easing: "ease-in",
};

export default Collapse;
