import { MovieType } from "@/utils/types";

type CrewProps = {
  dataCrew: MovieType[];
  dataCre: MovieType[];
};

export const Crew = ({ dataCrew, dataCre }: CrewProps) => {
  const director = dataCre.filter((direct) => {
    return direct.known_for_department === "Directing";
  });
  const directors = dataCre.filter((direct) => {
    return direct.known_for_department === "Writing";
  });
  return (
    <div className="mt-[20px]">
      <div className="border-solid border-b-stone-400 border-b-[0.1px] pb-[8px] flex gap-[35px]">
        <h3 className="text-[16px] font-bold">Director</h3>
        {director.slice(0, 1).map((crew: MovieType, index: number) => {
          return (
            <p key={index} className="text-[16px]">
              {crew.name}
            </p>
          );
        })}
      </div>
      <div className="border-solid border-b-stone-400 border-b-[0.1px] pb-[8px] pt-[20px] flex gap-[38px] ">
        <h3 className="text-[16px] font-bold">Writers</h3>
        {directors.slice(0, 1).map((crew: MovieType, index: number) => {
          return (
            <p key={index} className="text-[16px]">
              {crew.name}
            </p>
          );
        })}
      </div>
      <div className="flex gap-[53px] border-solid border-b-stone-400 border-b-[0.1px] mb-[32px] pb-[8px] pt-[20px]">
        <h3 className="text-[16px] font-bold">Stars</h3>
        <div className="flex gap-[10px]">
          {dataCrew.slice(0, 5).map((crew: MovieType, index: number) => {
            return (
              <p key={index} className="text-[16px]">
                {crew.name} &middot;
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
