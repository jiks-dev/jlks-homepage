import SimpleCarouselDataForm from "components/Common/SimpleCarouselDataForm";
import styled from "styled-components";

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];

const TeamInfoPage: React.FC = () => {
  return (
    <TeamInfoPageWrapper>
      Add Carousel
      <SimpleCarouselDataForm items={items}></SimpleCarouselDataForm>
    </TeamInfoPageWrapper>
  );
};

const TeamInfoPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TeamInfoPage;
