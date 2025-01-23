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

const MoviePage = async ({
  params: { movieId },
}: {
  params: { movieId: MovieType };
}) => {
  const data = await getDatas(`/movie/${movieId}?language=en-US`);
  const dataTrailer = await getDatas(`/movie/${movieId}/videos?language=en-US`);
  const dataGenres = await getDatas(`/genre/movie/list?language=en`);
  const dataGenre = dataGenres.genres;
  const dataCrews = await getDatas(`/movie/${movieId}/credits?language=en-US`);
  const dataCrew = dataCrews.cast;
  const dataCards = await getDatas(
    `/movie/${movieId}/similar?language=en-US&page=1`
  );
  const dataCard = dataCards.results;
  const text = "More like this";
  return (
    <div>
      <Header />
      <div className="max-w-[1080px] m-auto mt-[52px]">
        <HeaderBottom data={data} />
        <Trailer data={data} dataTrailer={dataTrailer} />
        <Genres dataGenre={dataGenre} />
        <p className="mt-[20px] text-[16px]">{data?.overview}</p>
        <Crew dataCrew={dataCrew} />
        <CardsTop text={text} />
        <Cards dataCard={dataCard} />
      </div>
      <Footer />
    </div>
  );
};
export default MoviePage;
