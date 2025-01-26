import { Button } from "@/components/ui/button";
import { GenreType } from "@/utils/types";

type GenresType = {
  dataGenre: GenreType[];
};

export const Genres = ({ dataGenre }: GenresType) => {
  return (
    <div className="mt-[32px] flex gap-[12px]">
      {dataGenre.slice(0, 4).map((genre: GenreType, index: number) => {
        return (
          <Button
            key={index}
            variant={"outline"}
            className="rounded-[15px] border-white-400 border-solid border-[1px] p-0 px-[10px] py-[2px] "
          >
            <p className="font-medium text-[12px]">{genre?.name}</p>
          </Button>
        );
      })}
    </div>
  );
};
