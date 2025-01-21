import { MovieType } from "@/utils/types";
import Star from "@/icons/Star";
import { MoveRight } from "lucide-react";
import { getData } from "@/utils/data";
import Image from "next/image";

export const TopRated = async () => {
  const data = await getData("top_rated?language=en-US&page=1");

  return (
    <div className="max-w-[1280px] m-auto">
      <div className="flex justify-between items-center my-[32px]">
        <h3 className="text-[24px] font-semibold">Top Rated</h3>
        <p className="text-[14px] flex items-center gap-[8px]">
          See more <MoveRight className="w-[16px] h-[16px]" />
        </p>
      </div>
      <div className="flex flex-wrap gap-[32px]">
        {data?.slice(0, 10).map((movie: MovieType) => {
          return (
            <div className="w-[230px] h-[440px] bg-[#F5F5F5] justify-around rounded-[8px] overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                width={1000}
                height={1000}
                alt=""
              />
              <div className="p-[8px] flex flex-col gap-[8px]">
                <div className="flex items-center gap-[4px]">
                  <Star />
                  <p className="text-[14px] text-[#09090b] font-medium ">
                    {movie?.vote_average.toFixed(1)}
                    <span className="text-[#71717a] text-[12px]">/10</span>
                  </p>
                </div>
                <h3 className="text-[#09090b] text-[18px] font-normal ">
                  {movie?.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
