import { Cards } from "./Cards";
import { getData } from "@/utils/data";
import { CardsTop } from "./CardsTop";

export const Popular = async () => {
  const data = await getData("/movie/popular?language=en-US&page=1");
  return (
    <div className="max-w-[1280px] m-auto">
      <CardsTop text={"Popular"} />
      <Cards data={data} />
    </div>
  );
};
