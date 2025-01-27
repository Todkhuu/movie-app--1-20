import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TOKEN } from "@/utils/constant";
import { IoIosArrowDown } from "react-icons/io";
import { PopButton } from "./components/PopButton";

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
          <PopButton data={data} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
