import { getData } from "@/utils/data";
import { Cards } from "./Cards";
import { CardsTop } from "./CardsTop";
import Link from "next/link";

export const Upcoming = async () => {
  const data = await getData("/movie/upcoming?language=en-US&page=1");
  return (
    <div className="max-w-[1280px] m-auto flex flex-wrap">
      <Link href="/catogery-detail/top_rated">
        <CardsTop text={"Upcoming"} />
      </Link>
      <Cards data={data} />
    </div>
  );
};
