"use client";

import Star from "@/app/Star";
import { useEffect, useState } from "react";

export const Popular = () => {
  const [movies, setMovies] = useState<MovieType[] | undefined>();
  type MovieType = {
    poster_path: string;
    title: string;
    vote_average: number;
  };
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
    console.log("data array", data.results);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <div className="flex justify-between my-[32px]">
        <h2>Popular</h2>
        <p>See more</p>
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
                <h3 className="text-[#09090b] text-[18px] font-normal ">
                  {movie?.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
