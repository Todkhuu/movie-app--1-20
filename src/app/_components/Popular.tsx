import { Cards } from "./Cards";
import { getData } from "@/utils/data";
import { CardsTop } from "./CardsTop";
import Link from "next/link";

export const Popular = async () => {
  const data = await getData("/movie/popular?language=en-US&page=1");
  return (
    <div className="max-w-[1280px] m-auto">
      <Link href="/catogery-detail/popular">
        <CardsTop text={"Popular"} />
      </Link>
      <Cards data={data} />
    </div>
  );
};
