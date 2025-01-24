"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getData } from "@/utils/data";
import { MovieType } from "@/utils/types";
import Star from "@/icons/Star";
import { SkeletonSlider } from "./Skeleton";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Trailer } from "@/app/movie-detail/[movieId]/components/Trailer";

export function CarouselDemo() {
  const [data, setdata] = React.useState<MovieType[] | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getData("/movie/now_playing?language=en-US&page=1");
      setdata(result);
    };
    fetchData();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      {!data ? (
        <SkeletonSlider />
      ) : (
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-[100%] h-[600px] m-auto"
        >
          <CarouselContent>
            {data.slice(0.4).map((data: MovieType, index: number) => (
              <div key={index} className="relative">
                <Link href={`movie-detail/${data.id}`}>
                  <CarouselItem>
                    <Card>
                      <CardContent
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
                        }}
                        className="aspect-square text-white w-[100vw] h-[600px] bg-cover bg-no-repeat bg-center flex items-center"
                      >
                        <div className="w-[500px] ml-[100px]">
                          <p className="text-[16px] font-normal">
                            Now Playing:
                          </p>
                          <h2 className="text-[36px] font-bold">
                            {data?.title}
                          </h2>
                          <div className="flex items-center gap-[4px] ">
                            <Star />
                            <p className="text-[18px] text-white font-medium ">
                              {data?.vote_average.toFixed(1)}
                              <span className="text-[#71717a] text-[16px]">
                                /10
                              </span>
                            </p>
                          </div>
                          <p className="text-[12px] w-[302px] h-[90px] overflow-hidden my-[16px]">
                            {data?.overview}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </Link>
                <div className="absolute left-[140px] bottom-[160px] z-1000">
                  <Trailer movieId={data?.id} />
                </div>
              </div>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[20px]" />
          <CarouselNext className="absolute right-[20px]" />
        </Carousel>
      )}
    </div>
  );
}
