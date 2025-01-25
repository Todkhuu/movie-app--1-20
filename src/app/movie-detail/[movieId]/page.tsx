import { Header } from "@/app/_components/Header";
import { MovieType } from "@/utils/types";
import { CardsTop } from "@/app/_components/CardsTop";
import { Footer } from "@/app/_components/Footer";
import { getDatas } from "@/utils/datas";
import { HeaderBottom } from "./components/HeaderBottom";
import { Trailer } from "./components/Trailer";
import { Genres } from "./components/Genres";
import { Crew } from "./components/Crew";
import { Cards } from "./components/Card";
import { Images } from "./components/Image";

const MoviePage = async ({
  params: { movieId },
}: {
  params: { movieId: MovieType };
}) => {
  const data = await getDatas(`/movie/${movieId}?language=en-US`);
  const dataGenres = await getDatas(`/genre/movie/list?language=en`);
  const dataGenre = dataGenres.genres;
  const dataCrews = await getDatas(`/movie/${movieId}/credits?language=en-US`);
  const dataCrew = dataCrews.cast;
  const dataCre = dataCrews.crew;
  console.log(dataCrew);
  const dataCards = await getDatas(
    `/movie/${movieId}/similar?language=en-US&page=1`
  );
  const dataCard = dataCards.results;
  const text = "More like this";
  return (
    <div>
      <div className="max-w-[1080px] m-auto mt-[52px]">
        <HeaderBottom data={data} />
        <div className="flex mt-[24px] justify-between">
          <Images data={data} />
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
            }}
            className="aspect-square w-[760px] h-[428px] bg-cover bg-no-repeat bg-center p-[24px] flex items-end"
          >
            <Trailer movieId={data?.id} />
          </div>
        </div>
        <Genres dataGenre={dataGenre} />
        <p className="mt-[20px] text-[16px]">{data?.overview}</p>
        <Crew dataCrew={dataCrew} dataCre={dataCre} />
        <CardsTop text={text} />
        <Cards dataCard={dataCard} />
      </div>
    </div>
  );
};
export default MoviePage;
