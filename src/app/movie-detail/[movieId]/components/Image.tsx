import { MovieType } from "@/utils/types";
import Image from "next/image";

type Images = {
  data: MovieType;
};

export const Images = ({ data }: Images) => {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
      width={1000}
      height={1000}
      alt=""
      className="w-[290px] h-[428px]"
    />
  );
};
