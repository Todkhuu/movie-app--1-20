import { getData } from "@/utils/data";
import { Cards } from "./Cards";
import { CardsTop } from "./CardsTop";

export const Upcoming = async () => {
  const data = await getData("upcoming?language=en-US&page=1");
  return (
    <div className="max-w-[1280px] m-auto flex flex-wrap">
      <CardsTop />
      <Cards data={data} />
    </div>
  );
};
