"use client";
import { Cards } from "@/app/_components/Cards";
import { getData } from "@/utils/data";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { ResultsType } from "@/utils/types";
import { Suspense } from "react";

const SimilarPage = () => {
  const [movies, setMovies] = useState<{
    page: number;
    total_results: number;
    results: ResultsType[];
    total_pages: number;
  } | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page") || "1");
  const similarId = searchParams.get("similarId");

  useEffect(() => {
    const getDatas = async () => {
      const data = await getData(
        `/movie/${similarId}/similar?language=en-US&page=${page}`
      );
      setMovies(data || []);
    };
    getDatas();
  }, [similarId, page]);

  const totalPage = movies?.total_pages || 0;

  return (
    <Suspense>
      <div className="max-w-[1280px] m-auto">
        <h2 className="text-[30px] font-semibold mt-[52px] mb-[32px]">
          More like this
        </h2>
        <Cards data={movies?.results} />
        <Pagination className="w-[100%] mt-[32px] flex justify-end">
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    router.push(
                      `/similar-detail?page=${page - 1}&similarId=${similarId}`
                    )
                  }
                />
              </PaginationItem>
            )}
            {page > 1 && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() =>
                    router.push(
                      `/similar-detail?page=${page - 1}&similarId=${similarId}`
                    )
                  }
                >
                  {page - 1}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink href="#" isActive>
                {page}
              </PaginationLink>
            </PaginationItem>

            {page < totalPage && totalPage > 1 && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() =>
                    router.push(
                      `/similar-detail?page=${page + 1}&similarId=${similarId}`
                    )
                  }
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {page == 1 && totalPage > 1 && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() =>
                    router.push(
                      `/similar-detail?page=${page + 2}&similarId=${similarId}`
                    )
                  }
                >
                  {page + 2}
                </PaginationLink>
              </PaginationItem>
            )}

            {page < totalPage - 1 && totalPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {page < totalPage && (
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    router.push(
                      `/similar-detail?page=${page + 1}&similarId=${similarId}`
                    )
                  }
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </Suspense>
  );
};
export default SimilarPage;
