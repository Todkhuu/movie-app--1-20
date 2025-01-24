import { Card, CardTitle } from "@/components/ui/card";
import Star from "@/icons/Star";
import { MovieType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

type Card = {
  dataCard: MovieType[];
};

export const Cards = ({ dataCard }: Card) => {
  return (
    <div className="flex gap-[32px]">
      {dataCard.slice(0, 5).map((card: MovieType, index: number) => {
        return (
          <Link href={`/movie-detail/${card.id}`}>
            <Card
              key={index}
              className="w-[190px] justify-around overflow-hidden bg-secondary hover:opacity-60 linear rounded-xl"
            >
              <Image
                src={`https://image.tmdb.org/t/p/original/${card?.poster_path}`}
                width={1000}
                height={1000}
                alt={card.title || "Movie poster"}
              />
              <div className="p-[8px] flex flex-col gap-[8px]">
                <div className="flex items-center gap-[4px]">
                  <Star />
                  <p className="text-[14px] font-medium ">
                    {card?.vote_average.toFixed(1)}
                    <span className="text-[#71717a] text-[12px]">/10</span>
                  </p>
                </div>
                <CardTitle className=" text-[18px] font-normal ">
                  {card?.title}
                </CardTitle>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
