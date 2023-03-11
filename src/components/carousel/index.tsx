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

export default function Carousel() {
  const carouselImages = [
    {
      src: icon.cover1,
      alt: "",
    },
    {
      src: icon.cover2,
      alt: "",
    },
    {
      src: icon.cover3,
      alt: "",
    },
    {
      src: icon.cover4,
      alt: "",
    },
  ];
  return (
    <ContainerCarousel>
      <CarouselProvider
        className="carouselContainer"
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={carouselImages.length}
        isPlaying
      >
        <Slider className="sliderContainer">
          {carouselImages.map((image, i) => (
            <Slide key={i} index={i}>
              <Image src={image.src} alt={image.alt} />
            </Slide>
          ))}
        </Slider>
        <CarouselContent>
          <ButtonNext className="nextArrow">
            <Image src={icon.rightArrow} alt="" />
          </ButtonNext>
          <h1>feel the passion of driving a classic </h1>
          <DotGroup className="dotGroup" />
        </CarouselContent>
      </CarouselProvider>
    </ContainerCarousel>
  );
}
