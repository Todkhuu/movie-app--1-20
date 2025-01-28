"use client";
import { Input } from "@/components/ui/input";
import { TOKEN } from "@/utils/constant";
import { MovieType } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Star from "@/icons/Star";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export function InputDemo() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const fetchData = async (searchValue: string) => {
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
  };

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clickHandler = () => {
    setSearchValue("");
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
      <div className="absolute right-[-40px] top-[45px]">
        {movies.length > 0 ? (
          <div className="w-[577px] h-auto p-[12px] bg-secondary rounded-[8px] border-[0.2px] border-secondary-foreground">
            {movies.slice(0, 5).map((movie, index) => (
              <Link key={index} href={`/movie-detail/${movie.id}`}>
                <div
                  onClick={clickHandler}
                  className="w-[553px] h-[116px] flex p-[8px] border-b-[0.8px] border-b-[#e4e4e7] hover:bg-slate-200 rounded-[8px] hover:text-black"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt=""
                    width={100}
                    height={100}
                    className="w-[67px] h-[100px] object-center object-cover rounded-[8px] mr-[16px]"
                  />
                  <div className="w-[100%]">
                    <h2 className="text-[20px] font-semibold">{movie.title}</h2>
                    <div className="flex items-center gap-[4px]">
                      <Star />
                      <p className="text-[14px] font-medium ">
                        {movie?.vote_average.toFixed(1)}
                        <span className="text-[#71717a] text-[12px]">/10</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] pt-[15px]">
                        {movie?.release_date.slice(0, 4)}
                      </p>
                      <p className="text-[14px] font-medium flex items-center gap-[8px]">
                        See more
                        <IoIosArrowRoundForward className="w-[16px] h-[16px]" />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <Link href={`/search?value=${searchValue}&page=`}>
              <p onClick={clickHandler} className="p-[16px]">
                See all results for
              </p>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
