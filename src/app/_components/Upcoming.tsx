import { Cards } from "./Cards";
import { CardsTop } from "./CardsTop";

export const Upcoming = () => {
  return (
    <div className="max-w-[1280px] m-auto flex flex-wrap">
      <CardsTop />
      <Cards />
    </div>
  );
};
