"use client";
import { useEffect, useState } from "react";
import Star from "./Star";
import { Popular } from "@/components/Popular";
import { HeaderMovie } from "@/components/HeaderMovie";

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
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
    // console.log({ response });
    // console.log("gg", data.results);
  };

  useEffect(() => {
    getMovie();
    // console.log("getting movie");
  }, []);

  console.log({ movies });
  return (
    <div>
      <HeaderMovie />
      <div className="max-w-[1280px] m-auto flex flex-wrap">
        <div className="w-[100%] flex justify-between my-[32px]">
          <h2>Upcoming</h2> <p>See more </p>
        </div>
        <div className="flex flex-wrap gap-[32px]">
          {movies?.slice(0, 10).map((movie, index) => {
            return (
              <div
                key={index}
                className="w-[230px] h-[440px] bg-[#F5F5F5] justify-around rounded-[8px] overflow-hidden"
              >
                <img
                  className="w-[100%] h-[75%]"
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt=""
                />
                <div className="p-[8px] flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[4px]">
                    <Star />
                    <p className="text-[14px] text-[#09090b] font-medium ">
                      {movie?.vote_average}
                      <span className="text-[#71717a] text-[12px]">/10</span>
                    </p>
                  </div>
                  <h2 className="text-[#09090b] text-[18px] font-normal ">
                    {movie?.title}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Popular />
    </div>
  );
}
