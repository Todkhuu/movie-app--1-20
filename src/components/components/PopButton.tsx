import { GenreType } from "@/utils/types";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type Genre = {
  data: GenreType[];
};

export const PopButton = ({ data }: Genre) => {
  return (
    <div className="flex flex-wrap gap-[18px]">
      {data.map((genre: GenreType, index: number) => {
        return (
          <Link key={index} href={`/genre-detail/${genre.id}`}>
            <button className="flex items-center gap-[8px] text-xs rounded-[20px] border-solid border-slate-500 border-[0.2px] px-[10px] py-[2px] font-semibold ">
              {genre?.name}
              <MdOutlineKeyboardArrowRight />
            </button>
          </Link>
        );
      })}
    </div>
  );
};
