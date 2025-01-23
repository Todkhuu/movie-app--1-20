import { MovieType } from "@/utils/types";
import Image from "next/image";

type Trailer = {
  data: MovieType;
  dataTrailer: MovieType;
};

export const Trailer = ({ data, dataTrailer }: Trailer) => {
  return (
    <div className="flex mt-[24px]">
      <Image
        src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
        width={1000}
        height={1000}
        alt=""
        className="w-[290px] h-[428px]"
      />
    </div>
  );
};
