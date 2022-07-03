import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "./CardCarousel";

function HorizontalSliderCard({ data, bodyPart, setBodyPart }) {
  return (
    <div>
      <div
        // style={{
        //   position: "relative",
        // }}
        className="flex flex-col items-center justify-center"
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={5000}
          centerMode={false}
          className="py-10"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {data.map((item) => (
            <CardCarousel
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HorizontalSliderCard;
