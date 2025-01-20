"use client";

import { useEffect, useState } from "react";
type MovieType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Home() {
  const [movies, setMovies] = useState<MovieType[] | undefined>();

  // Fetch movie
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzdkZTYzNTFlOGYxMzhiOWExMTU1MjRhYWMxMzk2MyIsIm5iZiI6MTczNzM0MTg2Mi45ODEsInN1YiI6IjY3OGRiYmE2OWQ1ZTM2M2QxOTY0ZTQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EZ1GfaEKlftC3VV-FGulG5CPUtbv1LjooNL2XNpEbLM";
  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
    }
    console.log({ response });
    console.log("gg", data.results);
  };

  useEffect(() => {
    getMovie();
    console.log("getting movie");
  }, []);

  console.log({ movies });
  return (
    <div className="max-w-[1280px] m-auto flex flex-wrap gap-5px">
      {movies?.map((movie, index) => {
        return (
          <div
            key={index}
            className="w-[230px] h-[440px] bg-[#F5F5F5] justify-around "
          >
            <img
              className="w-[100%] h-[70%]"
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt=""
            />
            <p>{movie?.vote_average}</p>
            <h2>{movie?.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
