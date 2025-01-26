import { OneMovieType } from "@/utils/types";
import { FaStar } from "react-icons/fa6";

type HeaderBottom = {
  data: OneMovieType;
};

export const HeaderBottom = ({ data }: HeaderBottom) => {
  const conTime = data.runtime;
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-[36px] font-semibold ">{data?.title}</h2>
        <div>
          <p className="text-[18px]">
            {data?.release_date} · PG · {Math.floor(conTime / 60)}h{" "}
            {Math.floor(conTime % 60)}min
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
  );
};
