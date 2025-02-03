import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

type PaginationProps = {
  page: number;
  totalPage: number;
  category: string;
};

const PaginationDemo = ({ page, totalPage, category }: PaginationProps) => {
  const router = useRouter();
  return (
    <Pagination className="w-[100%] mt-[32px] flex justify-end">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() =>
                router.push(
                  `/catogery-detail?page=${page - 1}&category=${category}`
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
                  `/catogery-detail?page=${page - 1}&category=${category}`
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
                  `/catogery-detail?page=${page + 1}&category=${category}`
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
                  `/catogery-detail?page=${page + 2}&category=${category}`
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
                  `/catogery-detail?page=${page + 1}&category=${category}`
                )
              }
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationDemo;
