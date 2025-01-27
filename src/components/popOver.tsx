import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TOKEN } from "@/utils/constant";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { GenreType } from "@/utils/types";

export async function PopoverDemo() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const datas = await response.json();
  const data = datas.genres;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <IoIosArrowDown />
          Genre
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[577px] h-[auto] ml-[480px]">
        <div className="grid gap-4">
          <div className="space-y-2 border-solid border-b-stone-400 border-b-[1px] pb-[10px]">
            <h4 className="font-semibold text-2xl">Genres</h4>
            <p className="text-base text-muted-foreground">
              See lists of movies by genre
            </p>
          </div>
          <div className="flex flex-wrap gap-[18px]">
            {data.map((genre: GenreType, index: number) => {
              return (
                // <Button
                //   key={index}
                //   variant="outline"
                //   className=" text-xs rounded-[20px] m-0"
                // >
                //   {genre?.name}
                //   <MdOutlineKeyboardArrowRight />
                // </Button>
                <Link href={`/genre-detail/${genre.id}`}>
                  <button
                    key={index}
                    className="flex items-center gap-[8px] text-xs rounded-[20px] border-solid border-slate-500 border-[0.2px] px-[10px] py-[2px] font-semibold "
                  >
                    {genre?.name}
                    <MdOutlineKeyboardArrowRight />
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
