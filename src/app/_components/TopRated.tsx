import { Cards } from "./Cards";
import { getData } from "@/utils/data";
import { CardsTop } from "./CardsTop";

export const TopRated = async () => {
  const data = await getData("/movie/top_rated?language=en-US&page=1");
  const text = "TopRated";
  return (
    <div className="max-w-[1280px] m-auto">
      <CardsTop text={text} />
      <Cards data={data} />
    </div>
  );
};
