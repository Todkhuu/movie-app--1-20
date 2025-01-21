import { MoveRight } from "lucide-react";
import { Cards } from "./Cards";
import { getData } from "@/utils/data";

export const Popular = async () => {
  const data = await getData("popular?language=en-US&page=1");
  console.log("dataaa", data);
  return (
    <div className="max-w-[1280px] m-auto">
      <div className="flex justify-between items-center my-[32px]">
        <h2 className="text-[24px] font-semibold">Popular</h2>
        <p className="text-[14px] flex items-center gap-[8px]">
          See more <MoveRight className="w-[16px] h-[16px]" />
        </p>
      </div>
      <Cards data={data} />
    </div>
  );
};
