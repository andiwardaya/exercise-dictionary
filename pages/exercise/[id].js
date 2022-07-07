import React from "react";
import Detail from "../../components/Detail";
import ExerciseVideo from "../../components/ExerciseVideo";
import SimiliarVideo from "../../components/SimiliarVideo";
import Navbar from "../../components/Navbar";
import { exerciseOptions, fetchData } from "../../utils/fetchData";

function exerciseDetail(dynamicBodyData) {
  return (
    <div className="max-w-6xl mx-auto py-6 px-5 overflow-x-hidden border">
      <Navbar />
      <Detail dynamicBodyData={dynamicBodyData.dynamicBodyData} />
      <ExerciseVideo />
      <SimiliarVideo />
    </div>
  );
}

export default exerciseDetail;

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

// export async function getStaticProps() {
//     const bodyPartDatas = await fetchData(
//       "https://exercisedb.p.rapidapi.com/exercises",
//       exerciseOptions
//     );

//     const bigDataExercises = bodyPartDatas;

//     return {
//       props: {
//         bigDataExercises,
//       }, // will be passed to the page component as props
//     };
//   }
