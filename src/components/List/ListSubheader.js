import React from "react";
import styled from "styled-components";

const SubheaderContainer = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: rgba(255, 255, 255, 0.62);
`;

const ListSubheader = ({ children }) => {
  return <SubheaderContainer>{children}</SubheaderContainer>;
};

export default ListSubheader;
