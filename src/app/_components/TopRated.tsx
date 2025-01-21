import { MoveRight } from "lucide-react";
import { Cards } from "./Cards";

export const TopRated = async () => {
  return (
    <div className="max-w-[1280px] m-auto">
      <div className="flex justify-between items-center my-[32px]">
        <h3 className="text-[24px] font-semibold">Top Rated</h3>
        <p className="text-[14px] flex items-center gap-[8px]">
          See more <MoveRight className="w-[16px] h-[16px]" />
        </p>
      </div>
      <Cards />
    </div>
  );
};
