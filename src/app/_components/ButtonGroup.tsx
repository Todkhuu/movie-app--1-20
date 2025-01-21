"use client";

import { MovieType } from "@/utils/types";

export const ButtonGroup = ({ movies }: { movies: MovieType[] }) => {
  const clickHandler = (backdropPath: string) => {
    console.log(
      `Button clicked! Background URL: https://image.tmdb.org/t/p/original/${backdropPath}`
    );
  };

  return (
    <div className="flex gap-4">
      {movies.map((movie: MovieType, index: number) =>
        movie.backdrop_path ? (
          <button
            key={index}
            onClick={() => clickHandler(movie.backdrop_path)}
            className="w-[20px] h-[20px] bg-black rounded-full"
          ></button>
        ) : null
      )}
    </div>
  );
};
