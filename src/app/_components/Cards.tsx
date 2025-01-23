import { MovieType } from "@/utils/types";
import Star from "@/icons/Star";
import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";

type CardsProps = {
  data: MovieType[];
};

export const Cards = ({ data }: CardsProps) => {
  return (
    <div className="flex flex-wrap gap-[32px]">
      {data?.slice(0, 10).map((movie: MovieType, index: number) => {
        return (
          <Card
            key={index}
            className="w-[230px] h-[440px] justify-around overflow-hidden"
          >
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
        );
      })}
    </div>
  );
};
