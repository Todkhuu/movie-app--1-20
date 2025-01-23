"use client";
import { Input } from "@/components/ui/input";
// import { TOKEN } from "@/utils/constant";
// import { MovieType } from "@/utils/types";
// import { useEffect, useState } from "react";

export function InputDemo() {
  // const [searchValue, setSearchValue] = useState();
  // const getMovie = async () => {
  //   const result = await fetch(
  //     `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${1}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await result.json();
  //   console.log("dataaaa", data);
  // };
  // useEffect(() => {
  //   getMovie();
  // }, []);
  return <Input className="w-[379px]" type="text" placeholder="Search..." />;
}
