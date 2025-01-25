import { Upcoming } from "./_components/Upcoming";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";
import { CarouselDemo } from "@/components/carousel";

export default function Home() {
  return (
    <div>
      <CarouselDemo />
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
}
