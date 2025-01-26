import { MovieType } from "@/utils/types";
import { Card, CardContent } from "../ui/card";
import Star from "@/icons/Star";

type CardType = {
  data: MovieType;
};

export const Cards = ({ data }: CardType) => {
  return (
    <Card>
      <CardContent
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
        }}
        className="aspect-square text-white w-[100vw] h-[600px] bg-cover bg-no-repeat bg-center flex items-center"
      >
        <div className="w-[500px] ml-[100px]">
          <p className="text-[16px] font-normal">Now Playing:</p>
          <h2 className="text-[36px] font-bold">{data?.title}</h2>
          <div className="flex items-center gap-[4px] ">
            <Star />
            <p className="text-[18px] text-white font-medium ">
              {data?.vote_average.toFixed(1)}
              <span className="text-[#71717a] text-[16px]">/10</span>
            </p>
          </div>
          <p className="text-[12px] w-[302px] h-[90px] overflow-hidden my-[16px]">
            {data?.overview}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
