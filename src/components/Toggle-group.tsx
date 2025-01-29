// "use client";
// import React from "react";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// import { GenreType, MovieType, PageType } from "@/utils/types";
// import { getData } from "@/utils/data";
// import { TOKEN } from "@/utils/constant";
// import Link from "next/link";
// import { Card, CardTitle } from "./ui/card";
// import Image from "next/image";
// import Star from "@/icons/Star";
// import { Pagination } from "./ui/pagination";
// import { useSearchParams } from "next/navigation";

// type types = {
//   genreId: string;
// };

// export function ToggleGroupDemo({ genreId }: types) {
//   const [movies, setMovies] = React.useState<any>([]);
//   const [genres, setGenres] = React.useState<GenreType[]>([]);
//   const [selectedGenres, setSelectedGenres] = React.useState<string[]>([]);
//   // const [filteredMovies, setFilteredMovies] = React.useState<MovieType[]>([]);
//   const searchParams = useSearchParams();

//   const page = searchParams.get("page") || "1";

//   React.useEffect(() => {
//     const getDatas = async () => {
//       const data = await getData(
//         `/discover/movie?language=en&with_genres=${genreId}&page=${page}`
//       );
//       setMovies(data.results || []);
//       // setFilteredMovies(data.results || []);
//       console.log("Movies:", data);
//     };
//     getDatas();
//   }, [genreId]);

//   React.useEffect(() => {
//     const getDatass = async () => {
//       const responses = await fetch(
//         `https://api.themoviedb.org/3/genre/movie/list?language=en`,
//         {
//           headers: {
//             Authorization: `Bearer ${TOKEN}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const dataGenre = await responses.json();
//       setGenres(dataGenre.genres || []);
//       console.log("Genres:", dataGenre);
//     };
//     getDatass();
//   }, []);

//   const clickHandler = (genreId: number) => {
//     // setGenres
//     // const filtered = genres.filter((genre: GenreType) =>
//     // );
//     // setFilteredMovies(filtered);
//     // console.log("Filtered Movies:", filteredMovies);
//   };

//   return (
//     <div className="flex justify-between">
//       <div className="w-[387px]">
//         <h3 className="text-[24px] font-semibold">Genres</h3>
//         <p className="text-[16px]">See lists of movies by genre</p>
//         <ToggleGroup type="multiple" className="flex flex-wrap ">
//           {genres?.map((genre: GenreType, index: number) => (
//             <ToggleGroupItem
//               key={index}
//               value={genre.name}
//               aria-label="Toggle bold"
//               onClick={() => clickHandler(genre.id)}
//             >
//               <Link
//                 href={`/genre-detail/${genreId}?genreIds=${selectedGenres}`}
//               >
//                 {genre.name}
//               </Link>
//             </ToggleGroupItem>
//           ))}
//         </ToggleGroup>
//       </div>
//       <div className="w-[806px] pl-[16px] border-l-[0.3px]">
//         <h3 className="flex text-[20px] font-semibold mb-[32px]">
//           {movies.total_results} titles in{" "}
//           {genres
//             .filter((genre: GenreType) => genre.id.toString() == genreId)
//             .map((genre: GenreType, index: number) => (
//               <p key={index}>{genre.name}</p>
//             ))}
//         </h3>
//         <div className="flex flex-wrap gap-[43px]">
//           {movies.map((data: PageType, index: number) => {
//             return (
//               <Link key={index} href={`/movie-detail/${data.id}`}>
//                 <Card className="w-[165px] h-[331px] justify-around overflow-hidden bg-secondary hover:opacity-60 linear rounded-xl">
//                   <Image
//                     src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
//                     width={1000}
//                     height={1000}
//                     alt={data?.title || "Movie poster"}
//                   />
//                   <div className="p-[8px] flex flex-col gap-[8px]">
//                     <div className="flex items-center gap-[4px]">
//                       <Star />
//                       <p className="text-[14px] font-medium ">
//                         {data?.vote_average.toFixed(1)}
//                         <span className="text-[#71717a] text-[12px]">/10</span>
//                       </p>
//                     </div>
//                     <CardTitle className=" text-[16px] font-normal ">
//                       {data?.title}
//                     </CardTitle>
//                   </div>
//                 </Card>
//               </Link>
//             );
//           })}
//         </div>
//         <Pagination />
//       </div>
//     </div>
//   );
// }
