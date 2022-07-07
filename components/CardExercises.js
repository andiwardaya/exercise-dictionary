import Link from "next/link";
import React from "react";

function CardExercises({ exercise }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 cursor-pointer hover:shadow-xl ">
      <Link href={`/exercise/${exercise.id}`}>
        <div>
          <img
            className="w-28 h-28 md:w-60 md:h-60"
            src={exercise.gifUrl}
            alt="exerciseGif"
            loading="lazy"
          />
          <div className="w-[10rem]  space-y-2 mx-auto">
            <h3 className="text-[12px] bg-red-500 text-white font-bold uppercase py-1 px-4 rounded-md">
              {exercise.name}
            </h3>
            <div className="flex space-x-1 items-center justify-center text-[10px] ">
              <p className="bg-black py-1 px-2 rounded-md text-white ">
                Target: {exercise.target}
              </p>
              <p className="bg-yellow-300 py-1 px-2 rounded-md text-black ">
                Bodypart: {exercise.bodyPart}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardExercises;
