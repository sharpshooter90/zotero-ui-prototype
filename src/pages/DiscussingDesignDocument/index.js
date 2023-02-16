import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  p,
  li {
    padding: 3px 2px;
  }
`;

const DiscussingDesignDocument = () => {
  return (
    <StyledContent>
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
    </StyledContent>
  );
};

export default DiscussingDesignDocument;
