"use client";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GenreType, PageType } from "@/utils/types";
import { getData } from "@/utils/data";
import { TOKEN } from "@/utils/constant";
import Link from "next/link";
import Image from "next/image";
import Star from "@/icons/Star";
import { useSearchParams } from "next/navigation";
import { Card, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function ToggleGroupDemo() {
  const [movies, setMovies] = React.useState<{
    page: number;
    total_results: number;
    results: PageType[];
    total_pages: number;
  } | null>(null);
  const [genres, setGenres] = React.useState<GenreType[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page") || "1");
  const genreIds = searchParams.get("genreIds");

  React.useEffect(() => {
    const getDatas = async () => {
      const data = await getData(
        `/discover/movie?language=en&with_genres=${genreIds}&page=${page}`
      );
      setMovies(data || []);
      console.log("Movies:", data);
    };
    getDatas();
  }, [genreIds, page]);

  React.useEffect(() => {
    const getDatass = async () => {
      const responses = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?language=en`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const dataGenre = await responses.json();
      setGenres(dataGenre.genres || []);
      // console.log("Genres:", dataGenre);
    };
    getDatass();
  }, []);

  const clickHandler = (newGenreIds: string[]) => {
    console.log("newGenre", newGenreIds);
    router.push(`?page=${page}&genreIds=${newGenreIds}`);
  };

  const totalPage = movies?.total_pages || 0;

  return (
    <div className="max-w-[1280px] m-auto">
      <h2 className="text-[30px] font-semibold mt-[52px] mb-[32px]">
        Search filter
      </h2>
      <div className="flex justify-between">
        <div className="w-[387px]">
          <h3 className="text-[24px] font-semibold">Genres</h3>
          <p className="text-[16px]">See lists of movies by genre</p>
          <ToggleGroup
            onValueChange={clickHandler}
            type="multiple"
            className="flex flex-wrap justify-start mt-[20px] gap-[16px]"
          >
            {genres?.map((genre: GenreType, index: number) => (
              <ToggleGroupItem
                key={index}
                value={genre.id.toString()}
                aria-label="Toggle bold"
                variant={"outline"}
                className="h-auto rounded-full text-[12px] px-[10px]"
              >
                {genre.name}
                <MdOutlineKeyboardArrowRight />
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="w-[806px] pl-[16px] border-l-[0.3px]">
          <h3 className="flex text-[20px] font-semibold mb-[32px]">
            {movies?.total_results} titles in{" "}
            {genres
              .filter((genre: GenreType) => genre.id.toString() == genreIds)
              .map((genre: GenreType, index: number) => (
                <p key={index}>{genre.name}</p>
              ))}
          </h3>
          <div className="flex flex-wrap gap-[43px]">
            {movies?.results.map((data: PageType, index: number) => {
              return (
                <Link key={index} href={`/movie-detail/${data.id}`}>
                  <Card className="w-[165px] h-[331px] justify-around overflow-hidden bg-secondary hover:opacity-60 linear rounded-xl">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                      width={1000}
                      height={1000}
                      alt={data?.title || "Movie poster"}
                    />
                    <div className="p-[8px] flex flex-col gap-[8px]">
                      <div className="flex items-center gap-[4px]">
                        <Star />
                        <p className="text-[14px] font-medium ">
                          {data?.vote_average.toFixed(1)}
                          <span className="text-[#71717a] text-[12px]">
                            /10
                          </span>
                        </p>
                      </div>
                      <CardTitle className=" text-[16px] font-normal ">
                        {data?.title}
                      </CardTitle>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
          <Pagination>
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() =>
                      router.push(
                        `/genre-detail?page=${page - 1}&genreIds=${genreIds}`
                      )
                    }
                  />
                </PaginationItem>
              )}
              {page > 1 && (
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={() =>
                      router.push(
                        `/genre-detail?page=${page - 1}&genreIds=${genreIds}`
                      )
                    }
                  >
                    {page - 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationLink href="#" isActive>
                  {page}
                </PaginationLink>
              </PaginationItem>

              {page < totalPage && totalPage > 1 && (
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={() =>
                      router.push(
                        `/genre-detail?page=${page + 1}&genreIds=${genreIds}`
                      )
                    }
                  >
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              {page == 1 && totalPage > 1 && (
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={() =>
                      router.push(
                        `/genre-detail?page=${page + 2}&genreIds=${genreIds}`
                      )
                    }
                  >
                    {page + 2}
                  </PaginationLink>
                </PaginationItem>
              )}

              {page < totalPage - 1 && totalPage > 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {page < totalPage && (
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() =>
                      router.push(
                        `/genre-detail?page=${page + 1}&genreIds=${genreIds}`
                      )
                    }
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
