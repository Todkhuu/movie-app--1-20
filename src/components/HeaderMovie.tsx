"use client";

import { useEffect, useState } from "react";

export const HeaderMovie = () => {
  const [movies, setMovies] = useState();

  type MovieType = {
    backdrop_path: string;
    poster_path: string;
    title: string;
    original_title: string;
    vote_average: number;
    overview: string;
    video: boolean;
  };

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzdkZTYzNTFlOGYxMzhiOWExMTU1MjRhYWMxMzk2MyIsIm5iZiI6MTczNzM0MTg2Mi45ODEsInN1YiI6IjY3OGRiYmE2OWQ1ZTM2M2QxOTY0ZTQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EZ1GfaEKlftC3VV-FGulG5CPUtbv1LjooNL2XNpEbLM";
  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data?.results) {
      setMovies(data.results);
      console.log({ response });
      console.log("gg", data.results);
    }
  };

  useEffect(() => {
    getMovie();
    console.log("getting movie");
  }, []);

  return (
    <div className="">
      <div></div>
    </div>
  );
};
