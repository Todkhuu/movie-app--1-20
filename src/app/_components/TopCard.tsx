import { getData } from "@/utils/data";
import { MovieType } from "@/utils/types";

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
        {data?.slice(0, 3).map((movie: MovieType) => {
          return (
            <button className="w-[20px] h-[20px] bg-black rounded-full"></button>
          );
        })}
      </div>
    </div>
  );
};
