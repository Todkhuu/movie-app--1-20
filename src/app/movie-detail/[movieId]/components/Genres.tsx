import { MovieType } from "@/utils/types";

type Genre = {
  dataGenre: MovieType[];
};

export const Genres = ({ dataGenre }: Genre) => {
  return (
    <div className="mt-[32px] flex gap-[12px]">
      {dataGenre.slice(0, 4).map((data: MovieType) => {
        return (
          <button className="rounded-[15px] border-white-400 border-solid border-[1px] px-[10px] py-[2px]">
            <p className="font-medium text-[12px]">{data?.name}</p>
          </button>
        );
      })}
    </div>
  );
};
