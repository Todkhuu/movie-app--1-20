import { MoveRight } from "lucide-react";
import { Cards } from "./Cards";

export const Popular = async () => {
  return (
    <div className="max-w-[1280px] m-auto">
      <div className="flex justify-between items-center my-[32px]">
        <h2 className="text-[24px] font-semibold">Popular</h2>
        <p className="text-[14px] flex items-center gap-[8px]">
          See more <MoveRight className="w-[16px] h-[16px]" />
        </p>
      </div>
      <Cards />
    </div>
  );
};
