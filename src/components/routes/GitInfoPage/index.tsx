import React from "react";
import styled from "styled-components";

const GitPage: React.FC = () => {
  return (
    <GitPageWrapper>
      <GitPageContainer>GitInfoInfoPage</GitPageContainer>
    </GitPageWrapper>
  );
};

const GitPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  background-color: #f6f7fb;
  box-sizing: border-box;
`;

const GitPageContainer = styled.div``;

export default GitPage;
