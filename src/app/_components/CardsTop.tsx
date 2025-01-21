import { MoveRight } from "lucide-react";

export const CardsTop = () => {
  return (
    <div className="w-[100%] flex justify-between items-center my-[32px]">
      <h2 className="text-[24px] font-semibold">Upcoming</h2>
      <p className="text-[14px] flex items-center gap-[8px]">
        See more <MoveRight className="w-[16px] h-[16px]" />
      </p>
    </div>
  );
};
