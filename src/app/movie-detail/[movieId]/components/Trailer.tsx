"use client";
import { TrailerType } from "@/utils/types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CiPlay1 } from "react-icons/ci";
import { DialogTitle } from "@radix-ui/react-dialog";
import { getDatas } from "@/utils/datas";
import React, { useState } from "react";

export function Trailer({ movieId }: { movieId: number }) {
  const [data, setdata] = useState<TrailerType | null>(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getDatas(`/movie/${movieId}/videos?language=en-US`);
      const res = result.results[0];
      console.log(res);
      setdata(res);
    };
    fetchData();
  }, [movieId]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-[12px]">
          <Button variant="outline" className="rounded-full">
            <CiPlay1 />
          </Button>
          <DialogTitle className="text-white">Play Trailer</DialogTitle>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[996px] h-[561px] max-w-5xl p-0 gap-0 border-none">
        <DialogTitle></DialogTitle>
        <iframe
          width="996"
          height="561"
          src={`https://www.youtube.com/embed/${data?.key}`}
          className="rounded-[4px]"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}
