import { useState } from "react";

type UsePaginationPrpos = {
    perPage: number;
    page: number;
    total: number;
};

function usePagination() {
    const [pageInfo, setPageInfo] = useState<UsePaginationPrpos>({
        page: 1,
        perPage: 10,
        total: 0,
    });

    function handlePreviousPage() {
        setPageInfo({ ...pageInfo, page: pageInfo.page - 1 });
    }

    function handleNextPage() {
        setPageInfo({ ...pageInfo, page: pageInfo.page + 1 });
    }

    function handleSelectPerPage(perPage: number) {
        setPageInfo({ ...pageInfo, perPage: perPage, page: 1 });
    }

    return {
        pageInfo,
        setPageInfo,
        handleNextPage,
        handlePreviousPage,
        handleSelectPerPage,
    };
}

export { usePagination };

