import styled from "styled-components";
const StyledMutedText = styled.div`
  color: ${(props) => props.theme.colors[props.theme.mode].mutedText};
`;

export { StyledMutedText };
