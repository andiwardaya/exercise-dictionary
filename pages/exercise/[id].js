import React, { useEffect, useState } from "react";
import Detail from "../../components/Detail";
import ExerciseVideo from "../../components/ExerciseVideo";
import Navbar from "../../components/Navbar";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/fetchData";

function ExerciseDetail(dynamicBodyData) {
  const [exerciseVideoData, setExerciseVideoData] = useState([]);

  const nameExercise = dynamicBodyData.dynamicBodyData.name;

  useEffect(() => {
    const youtubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";
    const exercisesDBurl = "https://exercisedb.p.rapidapi.com";

    const fetchExercises = async () => {
      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${nameExercise}`,
        youtubeOptions
      );
      setExerciseVideoData(exerciseVideoData.contents);
    };
    fetchExercises();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-6 px-5 overflow-x-hidden border">
      <Navbar />
      <Detail dynamicBodyData={dynamicBodyData.dynamicBodyData} />
      <ExerciseVideo
        name={nameExercise}
        exerciseVideoData={exerciseVideoData}
      />
    </div>
  );
}

export default ExerciseDetail;

export async function getServerSideProps({ params: { id } }) {
  const dynamicBodyData = await fetchData(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    exerciseOptions
  );

  return {
    props: {
      dynamicBodyData,
    },
  };
}

// export async function getServerSideProps({ params: { id } }) {
//   const namaExercise =
//   const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
//   const dynamicBodyDataUrl =
//     "https://exercisedb.p.rapidapi.com/exercises/exercise";

//   const [dynamicBodyData, exerciseVideoData] = await Promise.all([
//     fetchData(`${dynamicBodyDataUrl}/${id}`, exerciseOptions),
//     fetchData(
//       `${youtubeSearchUrl}/search?query=${namaExercise}`,
//       youtubeOptions
//     ),
//   ]);

//   return {
//     props: {
//       dynamicBodyData,
//       exerciseVideoData,
//     },
//   };
// }

// export async function getServerSideProps() {
//   const [operationsRes, incidentsRes] = await Promise.all([
//     fetch(`${process.env.APP_DOMAIN}/api/${apiRoute}`),
//     fetch(`${process.env.APP_DOMAIN}/api/${apiRoute2}`)
//   ]);
//   const [operations, incidents] = await Promise.all([
//     operationsRes.json(),
//     incidentsRes.json()
//   ]);
//   return { props: { operations, incidents } };
// }
