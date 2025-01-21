import { getData } from "@/utils/data";
import { ButtonGroup } from "./ButtonGroup";

export const TopCard = async () => {
  const data = await getData("now_playing?language=en-US&page=1");
  return (
    <div className="flex flex-wrap flex-col h-[800px]">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data[0]?.backdrop_path})`,
        }}
        className={`w-[100%] h-[800px] bg-cover bg-no-repeat bg-center `}
      >
        <div className="h-[800px] w-[100%]">
          <ButtonGroup movies={data.slice(0, 3)} />
        </div>
      </div>
    </div>
  );
};
