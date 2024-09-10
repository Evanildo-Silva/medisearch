import { CustomPagination } from "@/components/CustomPagition";
import { SearchResultList } from "@/components/searchResultList";
import { useManagrSearch } from "@/shared/hooks/useManagerSearch";

function SearchPage() {
  const { pageInfo, handleNextPage, handlePreviousPage, handleSelectPerPage } =
    useManagrSearch();
  return (
    <div className="max-w-[70rem] m-auto px-6">
      <SearchResultList />
      <CustomPagination
        pageInfo={{
          page: pageInfo.page,
          perPage: pageInfo.perPage,
          total: pageInfo.total,
        }}
        handleSelectPerPage={(perPage) => handleSelectPerPage(perPage)}
        handlePreviousPage={() => handlePreviousPage()}
        handleNextPage={() => handleNextPage()}
      />
    </div>
  );
}

export { SearchPage };
