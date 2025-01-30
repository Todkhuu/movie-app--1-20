"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo({ totalPage, page }: number) {
  const router = useRouter();
  return (
    <Pagination>
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
  );
}
