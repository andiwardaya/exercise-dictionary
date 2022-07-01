import Head from "next/head";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import SearchExercises from "../components/SearchExercises";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-6 px-5 overflow-x-hidden border border-red-400">
      <Head>
        <title>Exercises Dictionary by Andiwardaya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <HeroBanner />
        <SearchExercises />
      </main>
    </div>
  );
}
