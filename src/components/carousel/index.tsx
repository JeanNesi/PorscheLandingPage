import { icon } from "@/assets";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ContainerCarousel, CarouselContent } from "./styles";
import { ICarousel } from "./utils/types";

export const Carousel = ({ images }: ICarousel) => {
  return (
    <ContainerCarousel>
      <CarouselProvider
        className="carouselContainer"
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={images.length}
        isPlaying
      >
        <Slider className="sliderContainer">
          {images.map((image, i) => (
            <Slide key={i} index={i}>
              <Image src={image.src} alt={image.alt} />
            </Slide>
          ))}
        </Slider>
        <CarouselContent>
          <ButtonNext className="nextArrow">
            <Image src={icon.rightArrow} alt="" />
          </ButtonNext>
          <h1>feel the passion of driving a classic</h1>
          <DotGroup className="dotGroup" />
        </CarouselContent>
      </CarouselProvider>
    </ContainerCarousel>
  );
};
