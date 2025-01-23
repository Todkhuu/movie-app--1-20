import { Header } from "@/app/_components/Header";
import { FaStar } from "react-icons/fa";
import { TOKEN } from "@/utils/constant";
import { MovieType } from "@/utils/types";
import Image from "next/image";

const MoviePage = async ({
  params: { movieId },
}: {
  params: { movieId: MovieType };
}) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  const responses = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const datas = await responses.json();
  console.log("responseee", datas);
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
      </div>
    </div>
  );
};
export default MoviePage;
