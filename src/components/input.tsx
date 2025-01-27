"use client";
import { Input } from "@/components/ui/input";
import { TOKEN } from "@/utils/constant";
import { MovieType } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export function InputDemo() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${1}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setMovies(data.results || []);
    console.log("ddddd", data);
  };

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative">
      <Input
        className="w-[379px]"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={searchHandler}
      />
      <div className="absolute">
        {movies.length > 0 ? (
          <div className="">
            {movies.map((movie, index) => (
              <div key={index} className="text-white">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt=""
                  width={80}
                  height={45}
                />
                {movie.title}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
