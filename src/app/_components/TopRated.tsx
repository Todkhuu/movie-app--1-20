import { Cards } from "./Cards";
import { getData } from "@/utils/data";
import { CardsTop } from "./CardsTop";
import Link from "next/link";

export const TopRated = async () => {
  const data = await getData("/movie/top_rated?language=en-US&page=1");
  return (
    <div className="max-w-[1280px] m-auto">
      <Link href={`/catogery-detail?page=1&category=${"top_rated"}`}>
        <CardsTop text={"Top Rated"} />
      </Link>
      <Cards data={data.results} />
    </div>
  );
};
