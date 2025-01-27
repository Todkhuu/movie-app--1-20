import { Card, CardTitle } from "@/components/ui/card";
import { TOKEN } from "@/utils/constant";
import Image from "next/image";
import Star from "@/icons/Star";
import { GenreType, PageType } from "@/utils/types";
// import { Pagination } from "@/components/ui/pagination";
import Link from "next/link";
import { getData } from "@/utils/data";
// import { PopButton } from "@/components/components/PopButton";
// import { ToggleGroupDemo } from "@/components/Toggle-group";

const GenrePage = async ({
  params,
}: {
  params: Promise<{ genreId: string }>;
}) => {
  const { genreId } = await params;
  const data: GenreType = await getData(
    `/discover/movie?language=en&with_genres=${genreId}&page=${1}`
  );
  const datas = data.results;

  const responses = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const dataGenre = await responses.json();

  return (
    <div className="max-w-[1280px] m-auto">
      <h2 className="text-[30px] font-semibold mt-[52px] mb-[32px]">
        Search filter
      </h2>
      <div className="flex justify-between">
        <div className="w-[387px]">
          <h3 className="text-[24px] font-semibold">Genres</h3>
          <p className="text-[16px]">See lists of movies by genre</p>
          {/* <ToggleGroupDemo dataGenre={dataGenre.genres} genreId={genreId} /> */}
        </div>
        <div className="w-[806px] pl-[16px] border-l-[0.3px]">
          <h3 className="flex text-[20px] font-semibold mb-[32px]">
            {data.total_results} titles in{" "}
            {dataGenre.genres
              .filter((genre: GenreType) => genre.id.toString() == genreId)
              .map((genre: GenreType, index: number) => (
                <p key={index}>{genre.name}</p>
              ))}
          </h3>
          <div className="flex flex-wrap gap-[43px]">
            {datas.map((data: PageType, index: number) => {
              return (
                <Link key={index} href={`/movie-detail/${data.id}`}>
                  <Card className="w-[165px] h-[331px] justify-around overflow-hidden bg-secondary hover:opacity-60 linear rounded-xl">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                      width={1000}
                      height={1000}
                      alt={data?.title || "Movie poster"}
                    />
                    <div className="p-[8px] flex flex-col gap-[8px]">
                      <div className="flex items-center gap-[4px]">
                        <Star />
                        <p className="text-[14px] font-medium ">
                          {data?.vote_average.toFixed(1)}
                          <span className="text-[#71717a] text-[12px]">
                            /10
                          </span>
                        </p>
                      </div>
                      <CardTitle className=" text-[16px] font-normal ">
                        {data?.title}
                      </CardTitle>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
          {/* <Pagination /> */}
          {/* <PopButton data={data.results} /> */}
        </div>
      </div>
    </div>
  );
};
export default GenrePage;
