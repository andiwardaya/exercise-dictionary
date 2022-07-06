import Head from "next/head";
import { useState } from "react";
import Exercises from "../components/Exercises";
import Exercise from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import SearchExercises from "../components/SearchExercises";
import { exerciseOptions, fetchData } from "../utils/fetchData";

export default function Home({ bigDataExercises }) {
  const [bodyPart, setBodyPart] = useState("");
  const [exercises, setExercises] = useState([]);
  console.log(bigDataExercises);
  return (
    <div className="max-w-6xl mx-auto py-6 px-5 overflow-x-hidden border bg-black">
      <Head>
        <title>Exercises Dictionary by Andiwardaya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <HeroBanner />
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          bigDataExercises={bigDataExercises}
        />
        <Exercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          exercises={exercises}
          bigDataExercises={bigDataExercises}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const bodyPartDatas = await fetchData(
    "https://exercisedb.p.rapidapi.com/exercises",
    exerciseOptions
  );

  const bigDataExercises = bodyPartDatas;

  return {
    props: {
      bigDataExercises,
    }, // will be passed to the page component as props
  };
}
