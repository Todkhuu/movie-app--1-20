import { Upcoming } from "./_components/Upcoming";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";
import { TopCard } from "./_components/TopCard";
import { ModeToggle } from "@/components/theme-toggle";
import { CarouselDemo } from "@/components/carousel";
import Movie from "@/icons/Movie";

export default async function Home() {
  return (
    <div>
      <ModeToggle />
      {/* <TopCard /> */}
      <CarouselDemo />
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
}
