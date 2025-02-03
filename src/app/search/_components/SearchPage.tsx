"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { GenreType, ResultsType } from "@/utils/types";
import { getData } from "@/utils/data";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import Star from "@/icons/Star";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// import { PaginationDemo } from "@/components/Pagination";
type types = {
  results: ResultsType[];
  total_results: number;
  total_pages: number;
};

const SearchPages = () => {
  const [datas, setDatas] = useState<types | null>(null);
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [filtered, setFiltered] = useState<ResultsType[] | undefined>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const value = searchParams.get("value");
  const page = Number(searchParams.get("page") || "1");
  const genreIds = searchParams.get("genreIds");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(
        `/search/movie?query=${value}&language=en-US&page=${page}`
      );
      setDatas(data);
      setFiltered(data.results);
    };
    fetchData();
  }, [value, page]);

  useEffect(() => {
    const getDatas = async () => {
      const dataGenre = await getData(`/genre/movie/list?language=en`);
      setGenres(dataGenre.genres || []);
    };
    getDatas();
  }, []);

  useEffect(() => {
    const filter = datas?.results?.filter((data: ResultsType) =>
      data.genre_ids?.some((id) => genreIds?.includes(id.toString()))
    );
    setFiltered(filter);
  }, [datas, genreIds]);

  const clickHandler = (genreIds: string[]) => {
    console.log("newGenre", genreIds);
    router.push(`?page=${page}&value=${value}&genreIds=${genreIds}`);
  };

  const totalPage = datas?.total_pages || 0;
  return (
    <div className="max-w-[1280px] m-auto">
      <h2 className="text-[30px] mt-[52px] mb-[32px]">Search results</h2>
      <div className="flex">
        <div className="border-r-[1px] pr-[44px]">
          <h3 className="text-[20px] font-semibold mb-[32px]">
            results for {value}
          </h3>
          <div className="w-[804px] flex flex-wrap gap-[48px]">
            {filtered?.map((movie: ResultsType, index: number) => {
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
          <Pagination className="w-[100%] mt-[32px] flex justify-end">
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() =>
                      router.push(
                        `/search?page=${
                          page - 1
                        }&value=${value}&genreIds=${genreIds}`
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
                        `/search?page=${
                          page - 1
                        }&value=${value}&genreIds=${genreIds}`
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
                        `/search?page=${
                          page + 1
                        }&value=${value}&genreIds=${genreIds}`
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
                        `/search?page=${
                          page + 2
                        }&value=${value}&genreIds=${genreIds}`
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
                        `/search?page=${
                          page + 1
                        }&genreIds=${value}&genreIds=${genreIds}`
                      )
                    }
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
        <div className="ml-[44px]">
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
        </div>
      </div>
    </div>
  );
};
export default SearchPages;
