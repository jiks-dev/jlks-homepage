import React from "react";
import styled from "styled-components";
import TeamInfoPage from "./TeamInfoPage";

const TeamPage: React.FC = () => {
  return (
    <TeamPageWrapper>
      <TeamPageContainer>
        <TeamInfoPage />
      </TeamPageContainer>
    </TeamPageWrapper>
  );
};

const TeamPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  background-color: #f6f7fb;
  box-sizing: border-box;
`;

const TeamPageContainer = styled.div``;

export default TeamPage;
