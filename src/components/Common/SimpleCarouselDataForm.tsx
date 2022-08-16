import Carousel from "react-material-ui-carousel";
import { useState } from "react";
import styled from "styled-components";

interface IProps {
  items: any[];
  onNextNavButtonInLastIndexClick?: () => void;
}

const SimpleCarouselDataForm: React.FC<IProps> = ({
  items,
  onNextNavButtonInLastIndexClick,
}) => {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const isLastIndex = carouselIndex === items.length - 1;

  const contentItem = (item: any) => {
    return (
      <ContentWrapper>
        <CarouselImage src={item.image}></CarouselImage>
      </ContentWrapper>
    );
  };

  const onNextNavButtonClick = (next: number, active: number) => {
    isLastIndex
      ? onNextNavButtonInLastIndexClick && onNextNavButtonInLastIndexClick()
      : setCarouselIndex(() => next);
  };
  const onPrevNavButtonClick = (prev: number, active: number) => {
    setCarouselIndex(() => prev);
  };

  return (
    <>
      <Carousel
        fullHeightHover={false}
        indicators={false}
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        animation={"slide"}
        swipe={true}
        navButtonsProps={{
          style: {
            marginTop: 70,
            padding: 8,
            alignItems: "center",
          },
        }}
        next={(next: any, active: any) => {
          onNextNavButtonClick(next, active);
        }}
        prev={(prev: any, active: any) => {
          onPrevNavButtonClick(prev, active);
        }}
      >
        {items.map((item: any, _: number) => contentItem(item))}
      </Carousel>
    </>
  );
};

const CarouselImage = styled.img`
  align-items: center;
  font-size: 2rem;
  display: block;
  margin: auto;
  height: 300px;
  max-width: 480px;
`;

const ContentWrapper = styled.div`
  width: 600px;
`;

export default SimpleCarouselDataForm;
