"use client";
import { Cards } from "@/app/_components/Cards";
import { getData } from "@/utils/data";
import PaginationDemo from "./components/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ResultsType } from "@/utils/types";

const CategoryPage = () => {
  const [movies, setMovies] = useState<{
    page: number;
    total_results: number;
    results: ResultsType[];
    total_pages: number;
  }>();

  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") || "1");
  const category = searchParams.get("category") as string;

  useEffect(() => {
    const getDatas = async () => {
      const data = await getData(
        `/movie/${category}?language=en-US&page=${page}`
      );
      setMovies(data || []);
    };
    getDatas();
  }, [category, page]);

  console.log("Movie: ", movies);

  return (
    <div className="max-w-[1280px] m-auto">
      <h2 className="text-[30px] font-semibold mt-[52px] mb-[32px]">
        {category === "popular" ? "Popular" : ""}
        {category === "top_rated" ? "Top Rated" : ""}
        {category === "upcoming" ? "Upcoming" : ""}
      </h2>
      <Cards data={movies?.results} />
      <PaginationDemo
        page={page}
        category={category}
        totalPage={movies?.total_pages || 0}
      />
    </div>
  );
};
export default CategoryPage;
