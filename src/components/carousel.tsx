"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getData } from "@/utils/data";
import { ResultsType } from "@/utils/types";
import { SkeletonSlider } from "./Skeleton";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Trailer } from "@/app/movie-detail/[movieId]/components/Trailer";
import { Cards } from "./components/Cards";

export function CarouselDemo() {
  const [data, setdata] = React.useState<ResultsType[] | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getData("/movie/now_playing?language=en-US&page=1");
      setdata(result.results);
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
            {data.slice(0.4).map((data: ResultsType, index: number) => (
              <div key={index} className="relative">
                <Link href={`movie-detail/${data.id}`}>
                  <CarouselItem>
                    <Cards data={data} />
                  </CarouselItem>
                </Link>
                <div className="absolute left-[140px] bottom-[160px] z-1000">
                  <Trailer dataId={data?.id} />
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
