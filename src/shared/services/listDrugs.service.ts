import axios, { AxiosInstance } from "axios";
import { ListDrugsInputDto, ListDrugsOutputDto } from "./listdrugs.dto";

class ListDrugsService {
    constructor(private readonly api: AxiosInstance) { }

    async execute({ drugName,
        limit, skip
    }: ListDrugsInputDto): Promise<ListDrugsOutputDto> {
        const result = await this.api.get("https://api.fda.gov/drug/label.json", {
            params: {
                search: `openfda.brand_name:${drugName}*`, limit, skip
            }
        });
        return result.data;
    }
}

const listDrugsService = new ListDrugsService(axios)

export { ListDrugsService, listDrugsService };

