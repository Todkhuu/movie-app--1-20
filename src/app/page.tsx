import { Upcoming } from "./_components/Upcoming";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";
import { TopCard } from "./_components/TopCard";
import { CarouselDemo } from "@/components/carousel";
import { Header } from "./_components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <TopCard /> */}
      <CarouselDemo />
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
}
