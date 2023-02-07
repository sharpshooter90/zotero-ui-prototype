import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import styled from "styled-components";

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;

  background: ${(props) =>
    props.theme.searchInput.variants[props.variant].background};
  padding: ${(props) =>
    props.theme.searchInput.variants[props.variant].padding};
  box-shadow: ${({ theme }) => theme.shadow.searchInput};
  gap: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.searchInput.inputHoverBg};
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.searchInput.fontSize};
    font-family: ${({ theme }) => theme.searchInput.fontFamily};
    color: ${({ theme }) => theme.searchInput.colors};
    background-color: transparent;

    &::placeholder {
      font-family: ${({ theme }) => theme.searchInput.fontFamily};
      font-size: ${({ theme }) => theme.searchInput.fontSize};
      color: ${({ theme }) => theme.searchInput.placeholderColor};
    }
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.searchInput.iconColor};
  }
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.searchInput.background};
  color: ${({ theme }) => theme.searchInput.color};
`;

const SearchInput = ({ placeholder, variant = "borderStyle" }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchInputContainer variant={variant}>
      <Icon path={mdiMagnify} />
      <StyledInput
        type="text"
        placeholder={placeholder}
        variant={variant}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;
