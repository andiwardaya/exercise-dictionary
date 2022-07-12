import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalSliderCard from "./HorizontalSliderCard";

function SearchExercises({
  bodyPart,
  setExercises,
  setBodyPart,
  bigDataExercises,
}) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  // DATA KATEGORI SLIDER
  useEffect(() => {
    const fetchDataKategori = async () => {
      const BodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(BodyPartsData);
    };
    fetchDataKategori();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const pencarianExercisses = bigDataExercises.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(pencarianExercisses);
      window.scrollTo({ top: 1150, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 space-y-10 md:pt-36 ">
      <h1 className="text-4xl font-bold text-center leading-[3rem]">
        Awesome Exercises You <br></br>Should Know
      </h1>
      <form className="flex  max-w-xl mx-auto items-center  ">
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
      <HorizontalSliderCard
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </div>
  );
}

export default SearchExercises;
