import Link from "next/link";
import Image from "next/image";
import React from "react";

function ExerciseVideo({ name, exerciseVideoData }) {
  console.log(exerciseVideoData);
  const truncate = (input) =>
    input?.length > 20 ? `${input.substring(0, 40)}...` : input;

  return (
    <div>
      <h1 className="text-2xl font-bold py-4 mb-3">
        Watch {name} exercise videos
      </h1>
      {!exerciseVideoData.length ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {exerciseVideoData?.slice(0, 6).map((item, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              className="p-4 border border-gray-200 rounded-md hover:shadow-xl"
            >
              <Image
                className="rounded-md hover:shadow-xl "
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                width={250}
                height={200}
              />
              <h3 className="text-sm">{truncate(item.video.title)}</h3>
              <h3 className="text-sm font-bold text-gray-500">
                by {item.video.channelName}
              </h3>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExerciseVideo;
