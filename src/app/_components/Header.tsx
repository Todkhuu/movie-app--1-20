import { InputDemo } from "@/components/input";
import { PopoverDemo } from "@/components/popOver";
import { ModeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";
import Movie from "@/icons/Movie";
import Link from "next/link";

export const Header = () => {
  return (
    <Card className="h-[70px] sticky top-0 z-50 mb-[10px]">
      <div className=" max-w-[1280px] h-[70px] m-auto flex justify-between items-center ">
        <Link href="/">
          <div className="flex items-center gap-[10px]">
            <Movie />
            <h2 className="text-indigo-700 font-bold italic">Movie Z</h2>
          </div>
        </Link>
        <div className="flex gap-[10px]">
          <PopoverDemo />
          <InputDemo />
        </div>
        <ModeToggle />
      </div>
    </Card>
  );
};
