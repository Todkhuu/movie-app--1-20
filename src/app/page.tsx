import { Upcoming } from "./_components/Upcoming";
import { Popular } from "./_components/Popular";
import { TopRated } from "./_components/TopRated";

export default async function Home() {
  return (
    <div>
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
}
