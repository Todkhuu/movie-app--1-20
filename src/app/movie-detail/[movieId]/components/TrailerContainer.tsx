import { OneMovieType } from "@/utils/types";
import { Images } from "./Image";
import { Trailer } from "./Trailer";

type TrailerContainerType = {
  data: OneMovieType;
};

export const TrailerContainer = ({ data }: TrailerContainerType) => {
  return (
    <div className="flex mt-[24px] justify-between">
      <Images data={data} />
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
        }}
        className="aspect-square w-[760px] h-[428px] bg-cover bg-no-repeat bg-center p-[24px] flex items-end"
      >
        <Trailer dataId={data?.id} />
      </div>
    </div>
  );
};
