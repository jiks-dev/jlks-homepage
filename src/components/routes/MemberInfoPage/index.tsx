import React from "react";
import styled from "styled-components";

const MemberPage: React.FC = () => {
  return (
    <MemberPageWrapper>
      <MemberPageContainer>MemberPage</MemberPageContainer>
    </MemberPageWrapper>
  );
};

const MemberPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  background-color: #f6f7fb;
  box-sizing: border-box;
`;

const MemberPageContainer = styled.div``;

export default MemberPage;
