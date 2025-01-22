import { InputDemo } from "@/components/input";
import { PopoverDemo } from "@/components/popOver";
import { ModeToggle } from "@/components/theme-toggle";
import Movie from "@/icons/Movie";

export const Header = () => {
  return (
    <div className="h-[70px]">
      <div className="max-w-[1280px] h-[36px] m-auto flex justify-between items-center mt-[15px]">
        <div className="flex items-center gap-[10px]">
          <Movie />
          <h2 className="text-indigo-700 font-bold italic">Movie Z</h2>
        </div>
        <div className="flex gap-[10px]">
          <PopoverDemo />
          <InputDemo />
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};
