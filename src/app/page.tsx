import { Upcoming } from "./_components/Upcoming";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";
import { TopCard } from "./_components/TopCard";

export default async function Home() {
  return (
    <div>
      <TopCard />
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
}
