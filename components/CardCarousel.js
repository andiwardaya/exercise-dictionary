import React from "react";

function CardCarousel({ item, bodyPart, setBodyPart }) {
  return (
    <div
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      className="flex flex-col items-center justify-center p-10 border w-[10rem] md:w-[20rem] h-[10rem] mx-5 border border-gray-200 rounded-xl hover:shadow-xl text-red-500 uppercase text-2xl font-bold cursor-pointer "
    >
      {item}
    </div>
  );
}

export default CardCarousel;