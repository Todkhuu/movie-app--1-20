"use client";
import { Input } from "@/components/ui/input";
import { TOKEN } from "@/utils/constant";
import { MovieType } from "@/utils/types";
import Link from "next/link";
// import { MovieType } from "@/utils/types";
import { useEffect, useState } from "react";

export function InputDemo() {
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState([]);
  const getMovie = async (searchValue: string) => {
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${1}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    setSearch(data.results);
    console.log("dataaaa", search);
  };
  useEffect(() => {
    getMovie(searchValue);
  }, []);

  return (
    <div>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-[379px]"
        type="text"
        placeholder="Search..."
      />
      <div className="mt-4">
        {search.length > 0 ? (
          <ul className="space-y-2">
            {search.map((movie: MovieType, index: number) => (
              <Link href={`/movie-detail/${movie.id}`}>
                <li key={index} className="text-white">
                  {movie.title}
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          ""
          // <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
