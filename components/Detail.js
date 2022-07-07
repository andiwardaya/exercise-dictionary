import React from "react";

function Detail({ dynamicBodyData }) {
  const { bodyPart, gifUrl, name, target, equipment } = dynamicBodyData;
  console.log(dynamicBodyData);

  const imageDetail = [
    {
      icon: "/assets/icons/body-part.png",
      category: "Muscle",
      name: bodyPart,
    },
    {
      icon: "/assets/icons/equipment.png",
      category: "Equipment",
      name: equipment,
    },
    {
      icon: "/assets/icons/target.png",
      category: "target",
      name: target,
    },
  ];

  return (
    <div className="py-10 space-y-6 md:flex">
      <img
        src={gifUrl}
        className="mx-auto w-[20rem] h-[20rem] md:w-[26rem] md:h-[26rem] border border-gray-300 p-3  rounded-lg shadow-md hover:shadow-xl shadow-red-300 hover:shadow-red-300"
      />
      {/* DESCRIPTION */}
      <div className="space-y-6 px-7 mx-auto ">
        <h1 className="text-center font-bold text-2xl uppercase text-gray-500 md:text-3xl">
          {name}
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Exercise keep you strong. <span className="uppercase">{name}</span> is
          one of the best exercises to target your{" "}
          <span className="italic">{target}</span>. It will help you improve
          your mood, gain muscle and energy.
        </p>
        {imageDetail.map((item) => (
          <div
            key={item.name}
            className="flex items-center space-x-4 justify-start pl-5 "
          >
            <img src={item.icon} />
            <p className="mr-5 font-bold text-gray-400 uppercase">
              {item.category}:
            </p>
            <p className="font-bold uppercase text-red-500">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;
