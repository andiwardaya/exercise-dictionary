import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import CardExercises from "./CardExercises";
import Pagination from "./Pagination";

function Exercises({ exercises, bodyPart, setExercises, bigDataExercises }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  // value 1 * 10 = 10

  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // value  10 - 10 = 0

  const currentExercises = exercises.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // fetch ketika bodypart berubah
  useEffect(() => {
    // const fetchExercisesData = async () => {
    //   let exercisesData = [];
    //   if (bodyPart === "all") {
    //     exercisesData = await fetchData(
    //       "https://exercisedb.p.rapidapi.com/exercises",
    //       exerciseOptions
    //     );
    //   } else if (bodyPart === "") {
    //     console.log("choose category");
    //   } else {
    //     exercisesData = await fetchData(
    //       `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
    //       exerciseOptions
    //     );
    //   }
    const filterBigData = () => {
      let exercisesData = [];
      if (bodyPart.length > 0) {
        exercisesData = bigDataExercises.filter((obj) => {
          return obj.bodyPart === bodyPart;
        });
      }
      setExercises(exercisesData);
    };

    filterBigData();
    setExercises;
  }, [bodyPart]);

  console.log(exercises);
  console.log(bodyPart);
  return (
    <div>
      <h1 className="text-2xl text-center font-bold">Showing Result</h1>
      <div className="flex flex-row flex-wrap gap-5  border border-green-300 items-center justify-center py-5">
        {currentExercises.map((exercise, index) => (
          <CardExercises key={index} exercise={exercise} />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={exercises.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Exercises;
