import React from 'react';
import styled from 'styled-components';

const SidebarStyled = styled.div`
  width: ${props => props.width};
  background-color: ${props => props.theme.sidebarBg};
  color: ${props => props.theme.sidebarColor};
  border-right: 1px solid ${({ theme }) => theme.sidebar.borderColor};
`;

const Sidebar = ({ width, children }) => {
  return (
    <SidebarStyled width={width}>
      {children}
    </SidebarStyled>
  );
};

export default Sidebar;