"use client";
import { useSearchParams } from "next/navigation";
import { MovieType } from "@/utils/types";
import { getData } from "@/utils/data";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import Star from "@/icons/Star";
// import { PaginationDemo } from "@/components/Pagination";
type types = {
  results: MovieType[];
  total_results: number;
};

const SearchPage = () => {
  const [datas, setDatas] = useState<types | null>(null);
  const searchParams = useSearchParams();
  const value = searchParams.get("value");
  const page = searchParams.get("page") || "1";
  const fetchData = async () => {
    const data = await getData(
      `/search/movie?query=${value}&language=en-US&page=${page}`
    );
    console.log(data);
    setDatas(data);
  };
  useEffect(() => {
    fetchData();
  }, [value]);
  console.log("dddd", datas);
  return (
    <div className="max-w-[1280px] m-auto">
      <h2>Search results</h2>
      <div className="flex">
        <div className="border-r-[1px] pr-[44px]">
          <h3>
            {datas?.total_results} results for {value}
          </h3>
          <div className="w-[804px] flex flex-wrap gap-[48px]">
            {datas?.results.map((movie: MovieType, index: number) => {
              return (
                <Link key={index} href={`/movie-detail/${movie.id}`}>
                  <Card className="w-[165px] h-[331px] justify-around overflow-hidden bg-secondary hover:opacity-60 linear rounded-xl">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                      width={1000}
                      height={1000}
                      alt={movie.title || "Movie poster"}
                    />
                    <div className="p-[8px] flex flex-col gap-[8px]">
                      <div className="flex items-center gap-[4px]">
                        <Star />
                        <p className="text-[14px] font-medium ">
                          {movie?.vote_average.toFixed(1)}
                          <span className="text-[#71717a] text-[12px]">
                            /10
                          </span>
                        </p>
                      </div>
                      <CardTitle className=" text-[18px] font-normal ">
                        {movie?.title}
                      </CardTitle>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
          {/* <PaginationDemo /> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default SearchPage;
