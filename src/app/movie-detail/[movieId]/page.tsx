import { Header } from "@/app/_components/Header";
import { FaStar } from "react-icons/fa";
import { MovieType } from "@/utils/types";
import Image from "next/image";
import { CardsTop } from "@/app/_components/CardsTop";
import { Card, CardTitle } from "@/components/ui/card";
import Star from "@/icons/Star";
import { Footer } from "@/app/_components/Footer";
import { getDatas } from "@/utils/datas";
import Link from "next/link";

const MoviePage = async ({
  params: { movieId },
}: {
  params: { movieId: MovieType };
}) => {
  const data = await getDatas(`/movie/${movieId}?language=en-US`);
  const dataTrailer = await getDatas(`/movie/${movieId}/videos?language=en-US`);
  const dataGenres = await getDatas(`/genre/movie/list?language=en`);
  const dataCrew = await getDatas(`/movie/${movieId}/credits?language=en-US`);
  const dataCards = await getDatas(
    `/movie/${movieId}/similar?language=en-US&page=1`
  );
  const text = "More like this";
  return (
    <div>
      <Header />
      <div className="max-w-[1080px] m-auto mt-[52px]">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[36px] font-semibold ">{data?.title}</h2>
            <div>
              <p className="text-[18px]">
                {data?.release_date} · PG · {data?.runtime}
              </p>
            </div>
          </div>
          <div>
            <p className="text-[12px] font-semibold">Rating</p>
            <div className="flex mt-[8px] gap-[4px]">
              <FaStar className="w-[28px] h-[28px] fill-yellow-300" />
              <div>
                <p className="text-[18px] ">
                  {data?.vote_average.toFixed(1)}
                  <span className="text-[#71717a] text-[16px]">/10</span>
                </p>
                <p className="text-[12px] text-[#71717a]">{data?.vote_count}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-[24px]">
          <Image
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
            width={1000}
            height={1000}
            alt=""
            className="w-[290px] h-[428px]"
          />
        </div>
        <div className="mt-[32px] flex gap-[12px]">
          {dataGenres.genres.slice(0, 4).map((data: MovieType) => {
            return (
              <button className="rounded-[15px] border-white-400 border-solid border-[1px] px-[10px] py-[2px]">
                <p className="font-medium text-[12px]">{data?.name}</p>
              </button>
            );
          })}
        </div>
        <p className="mt-[20px] text-[16px]">{data?.overview}</p>
        <div className="mt-[20px] border-solid border-b-stone-400 border-b-[1px] my-[4px]">
          <h3 className="text-[16px] font-bold">Director</h3>
        </div>
        <div className="border-solid border-b-stone-400 border-b-[1px]">
          <h3 className="text-[16px] font-bold">Writers</h3>
        </div>
        <div className="flex gap-[53px] border-solid border-b-stone-400 border-b-[1px] mb-[32px]">
          <h3 className="text-[16px] font-bold">Stars</h3>
          <div className="flex gap-[10px]">
            {dataCrew.cast.slice(0, 3).map((d: MovieType) => {
              return <p className="text-[16px]">{d.name}</p>;
            })}
          </div>
        </div>
        <CardsTop text={text} />
        <div className="flex gap-[32px]">
          {dataCards.results.slice(0, 5).map((d: MovieType) => {
            return (
              <Card className="w-[190px] justify-around overflow-hidden bg-secondary hover:opacity-60 linear rounded-xl">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${d?.poster_path}`}
                  width={1000}
                  height={1000}
                  alt={d.title || "Movie poster"}
                />
                <div className="p-[8px] flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[4px]">
                    <Star />
                    <p className="text-[14px] font-medium ">
                      {d?.vote_average.toFixed(1)}
                      <span className="text-[#71717a] text-[12px]">/10</span>
                    </p>
                  </div>
                  <CardTitle className=" text-[18px] font-normal ">
                    {d?.title}
                  </CardTitle>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MoviePage;
