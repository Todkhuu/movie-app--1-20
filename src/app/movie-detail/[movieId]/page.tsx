import { CardsTop } from "@/app/_components/CardsTop";
import { getDatas } from "@/utils/datas";
import { HeaderBottom } from "./components/HeaderBottom";
import { Genres } from "./components/Genres";
import { Crew } from "./components/Crew";
import { Cards } from "./components/Card";
import { TrailerContainer } from "./components/TrailerContainer";

const MoviePage = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;

  const data = await getDatas(`/movie/${movieId}?language=en-US`);
  const dataGenres = await getDatas(`/genre/movie/list?language=en`);
  const dataCrews = await getDatas(`/movie/${movieId}/credits?language=en-US`);
  const dataCards = await getDatas(
    `/movie/${movieId}/similar?language=en-US&page=1`
  );

  return (
    <div>
      <div className="max-w-[1080px] m-auto mt-[52px]">
        <HeaderBottom data={data} />
        <TrailerContainer data={data} />
        <Genres dataGenre={dataGenres.genres} />
        <p className="mt-[20px] text-[16px]">{data?.overview}</p>
        <Crew dataCrew={dataCrews.cast} dataCast={dataCrews.crew} />
        <CardsTop text="More like this" />
        <Cards dataCard={dataCards.results} />
      </div>
    </div>
  );
};
export default MoviePage;
