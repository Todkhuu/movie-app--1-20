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

export async function CarouselDemo() {
  const data = await getData("upcoming?language=en-US&page=1");
  return (
    <Carousel className="w-[95%] h-[600px] m-auto">
      <CarouselContent>
        {data.map((data: MovieType, index: string) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
                }}
                className="w-[100%] h-[600px] bg-cover bg-no-repeat bg-center"
              ></CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
