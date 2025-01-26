import { MovieType } from "@/utils/types";

type CrewProps = {
  dataCrew: MovieType[];
  dataCast: MovieType[];
};

export const Crew = ({ dataCrew, dataCast }: CrewProps) => {
  const directors = dataCast.filter((direct) => {
    return direct.known_for_department === "Directing";
  });
  const writers = dataCast.filter((direct) => {
    return direct.known_for_department === "Writing";
  });
  return (
    <div className="mt-[20px]">
      <div className="border-solid border-b-stone-400 border-b-[0.1px] pb-[8px] flex gap-[35px]">
        <h3 className="text-[16px] font-bold">Director</h3>
        {directors.slice(0, 1).map((director: MovieType, index: number) => {
          return (
            <p key={index} className="text-[16px]">
              {director.name}
            </p>
          );
        })}
      </div>
      <div className="border-solid border-b-stone-400 border-b-[0.1px] pb-[8px] pt-[20px] flex gap-[38px] ">
        <h3 className="text-[16px] font-bold">Writers</h3>
        {writers.slice(0, 1).map((writer: MovieType, index: number) => {
          return (
            <p key={index} className="text-[16px]">
              {writer.name}
            </p>
          );
        })}
      </div>
      <div className="flex gap-[53px] border-solid border-b-stone-400 border-b-[0.1px] mb-[32px] pb-[8px] pt-[20px]">
        <h3 className="text-[16px] font-bold">Stars</h3>
        <div className="flex gap-[10px]">
          {dataCrew.slice(0, 5).map((actor: MovieType, index: number) => {
            return (
              <p key={index} className="text-[16px]">
                {actor.name} &middot;
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
