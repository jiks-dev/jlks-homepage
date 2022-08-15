import styled from "styled-components";

const TopbarInfoPage: React.FC = () => {
  return (
    <TopbarInfoWrapper>
      <TopbarTitleContainer>JS-LOGO</TopbarTitleContainer>
      <div>Team</div>
      <div>Member</div>
      <div>Git</div>
      <div>Contact</div>
    </TopbarInfoWrapper>
  );
};

const TopbarInfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 10%;
  }
`;

const TopbarTitleContainer = styled.div``;

export default TopbarInfoPage;
