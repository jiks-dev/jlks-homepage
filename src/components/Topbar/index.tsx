import React from "react";
import styled from "styled-components";
import TopbarInfo from "./TopbarInfo";

const Topbar: React.FC = () => {
  return (
    <TopbarPageWrapper>
      <TopbarPageContainer>
        <TopbarInfo />
      </TopbarPageContainer>
    </TopbarPageWrapper>
  );
};

const TopbarPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  background-color: #f6f7fb;
  box-sizing: border-box;
`;

const TopbarPageContainer = styled.div``;

export default Topbar;
