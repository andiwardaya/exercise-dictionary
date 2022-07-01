import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

function SearchExercises() {
  const [search, setSearch] = useState("");
  const [exercise, setExercise] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchDataKategori = async () => {
      const BodyPartsData = fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setBodyParts(["all", ...BodyPartsData]);
    };
    fetchDataKategori();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const pencarianExercisses = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercise(pencarianExercisses);
    }
  };

  console.log(bodyParts);
  return (
    <div className="pt-20 space-y-10 md:pt-36">
      <h1 className="text-4xl font-bold text-center leading-[3rem]">
        Awesome Exercises You <br></br>Should Know
      </h1>
      <form className="flex  m-w-2xl mx-auto items-center  ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          className=" w-full shadow border rounded-l-lg py-2 px-3 form-input focus:shadow-xl  outline-none"
          placeholder="search"
        />
        <button
          onClick={handleSearch}
          className="red-button ml-[-4px] rounded-none rounded-r-lg"
        >
          search
        </button>
      </form>
    </div>
  );
}

export default SearchExercises;
