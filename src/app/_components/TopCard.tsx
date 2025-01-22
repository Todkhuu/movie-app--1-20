import { getData } from "@/utils/data";

export const TopCard = async () => {
  const data = await getData("now_playing?language=en-US&page=1");
  return (
    <div className="flex flex-wrap flex-col h-[800px]">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data[0]?.backdrop_path})`,
        }}
        className="w-[100%] h-[600px] bg-cover bg-no-repeat bg-center "
      ></div>
    </div>
  );
};
