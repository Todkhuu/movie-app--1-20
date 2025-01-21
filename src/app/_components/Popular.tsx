import { MoveRight } from "lucide-react";
import { Cards } from "./Cards";
import { getData } from "@/utils/data";
import { CardsTop } from "./CardsTop";

export const Popular = async () => {
  const text = "Popular";
  const data = await getData("popular?language=en-US&page=1");
  console.log("dataaa", data);
  return (
    <div className="max-w-[1280px] m-auto">
      <CardsTop text={text} />
      <Cards data={data} />
    </div>
  );
};
