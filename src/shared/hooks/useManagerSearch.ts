import { useEffect, useState } from "react";
import { errorHandler } from "../api/errorHandler";
import { useAppContext } from "../context/AppContext";
import { listDrugsService } from "../services/listDrugs.service";
import { useDebounce } from "./useDebounce";
import { usePagination } from "./usePagination";

function useManagrSearch() {
    const [drugName, setDrugName] = useState<string>("");

    const { debouncedValue } = useDebounce(drugName);
    const { setDrugInfoList } = useAppContext();
    const { pageInfo, setPageInfo, handleNextPage, handlePreviousPage, handleSelectPerPage } = usePagination();;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDrugName(e.target.value);
    };

    const fetchDrugInfo = async () => {
        try {
            const response = await listDrugsService.execute({
                drugName: debouncedValue,
                limit: pageInfo.perPage,
                skip: pageInfo.page,
            });

            if (response.results && response.results.length > 0) {
                setDrugInfoList(response.results);
                setPageInfo({
                    page: response.meta.results.skip,
                    perPage: response.meta.results.limit,
                    total: response.meta.results.total
                });
            } else {
                setDrugInfoList([]);
            }
        } catch (err) {
            errorHandler(err);
            setDrugInfoList([]);
        }
    };

    useEffect(() => {
        fetchDrugInfo();
    }, [debouncedValue, pageInfo.page, pageInfo.perPage]);

    return {
        drugName,
        pageInfo,
        handleNextPage,
        handleInputChange,
        handlePreviousPage,
        handleSelectPerPage,
    }
}

export { useManagrSearch };

