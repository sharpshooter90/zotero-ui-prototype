import React from "react";
import styled from "styled-components";
import DocumentHighlighter from "../../components/PdfHighlighter";

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

const DiscussingDesignDocument = () => {
  return (
    <StyledContent>
      <DocumentHighlighter />
    </StyledContent>
  );
};

export default DiscussingDesignDocument;
