import { MovieType } from "@/utils/types";

type CrewProps = {
  dataCrew: MovieType[];
};

export const Crew = ({ dataCrew }: CrewProps) => {
  return (
    <div className="mt-[20px]">
      <div className="border-solid border-b-stone-400 border-b-[0.1px] pb-[8px]">
        <h3 className="text-[16px] font-bold">Director</h3>
      </div>
      <div className="border-solid border-b-stone-400 border-b-[0.1px] pb-[8px] pt-[20px]">
        <h3 className="text-[16px] font-bold">Writers</h3>
      </div>
      <div className="flex gap-[53px] border-solid border-b-stone-400 border-b-[0.1px] mb-[32px] pb-[8px] pt-[20px]">
        <h3 className="text-[16px] font-bold">Stars</h3>
        <div className="flex gap-[10px]">
          {dataCrew.slice(0, 3).map((data: MovieType) => {
            return <p className="text-[16px]">{data.name} &middot;</p>;
          })}
        </div>
      </div>
    </div>
  );
};
