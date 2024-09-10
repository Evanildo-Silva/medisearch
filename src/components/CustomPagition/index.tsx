import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type PaginationProps = {
  pageInfo?: {
    page: number;
    total: number;
    perPage: number;
  };
  handleSelectPerPage?: (perPage: number) => void;
  handlePreviousPage?: () => void;
  handleNextPage?: () => void;
};

const CustomPagination = ({
  pageInfo,
  handleSelectPerPage,
  handlePreviousPage,
  handleNextPage,
}: PaginationProps) => {
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!pageInfo) return;
    const total = Math.ceil(pageInfo.total / pageInfo.perPage);
    setTotalPages(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageInfo?.perPage, pageInfo?.total]);

  return (
    <div className="max-w-[62.5rem] rounded-lg flex py-1 m-auto mt-6 flex-col-reverse md:flex-row justify-center md:gap-2 bg-white">
      {handleSelectPerPage && (
        <div className="flex items-center justify-center gap-3">
          <p className="text-sm text-zinc-700">Registros por página:</p>
          <Select
            onValueChange={(value) => handleSelectPerPage(parseInt(value))}
          >
            <SelectTrigger className="w-[70px] h-10">
              <SelectValue placeholder={pageInfo?.perPage?.toString()} />
            </SelectTrigger>
            <SelectContent side="right" align="end">
              {[5, 10, 15, 20, 50].map((value) => (
                <SelectItem key={value} value={value.toString()}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      <div className="flex items-center justify-center gap-2">
        {pageInfo && handlePreviousPage && (
          <div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Anterior"
              onClick={handlePreviousPage}
              disabled={pageInfo.page === 1}
            >
              <ChevronLeft className="text-zinc-700 text-lg" />
            </Button>
          </div>
        )}
        <p className="text-sm text-zinc-700">
          Página {pageInfo?.page} de {totalPages}
        </p>
        {pageInfo && handleNextPage && (
          <div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Próximo"
              onClick={handleNextPage}
              disabled={totalPages <= 1 || pageInfo.page === totalPages}
            >
              <ChevronRight className="text-zinc-700 text-lg" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export { CustomPagination };
export type { PaginationProps };
