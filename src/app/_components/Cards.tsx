import { MovieType, ResultsType } from "@/utils/types";
import Star from "@/icons/Star";
import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type type = {
  data: ResultsType[] | undefined;
};

export const Cards = ({ data }: type) => {
  console.log("dataaaaaa", data);
  return (
    <div className="flex flex-wrap gap-[32px]">
      {data?.slice(0, 10).map((movie: ResultsType, index: number) => {
        return (
          <Link key={index} href={`/movie-detail/${movie.id}`}>
            <Card className="w-[230px] h-[440px] justify-around overflow-hidden bg-secondary hover:opacity-60 linear rounded-xl">
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
                    <span className="text-[#71717a] text-[12px]">/10</span>
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
  );
};
