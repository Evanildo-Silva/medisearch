import { DrugCard } from "../drugCard";
import { ScrollArea } from "../ui/scroll-area";

function SearchResultList() {
  return (
    <ScrollArea className="h-[750px] md:mx-6 mt-6 p-3 rounded-lg flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        <DrugCard
          brand_name={"Lossartan"}
          generic_name={"Lossartan"}
          manufacturer_name={"Neo Quimica"}
          indications_and_usage={"Dor"}
          route={"Oral"}
        />
        <DrugCard
          brand_name={"Lossartan"}
          generic_name={"Lossartan"}
          manufacturer_name={"Neo Quimica"}
          indications_and_usage={"Dor"}
          route={"Oral"}
        />
        <DrugCard
          brand_name={"Lossartan"}
          generic_name={"Lossartan"}
          manufacturer_name={"Neo Quimica"}
          indications_and_usage={"Dor"}
          route={"Oral"}
        />
        <DrugCard
          brand_name={"Lossartan"}
          generic_name={"Lossartan"}
          manufacturer_name={"Neo Quimica"}
          indications_and_usage={"Dor"}
          route={"Oral"}
        />
        <DrugCard
          brand_name={"Lossartan"}
          generic_name={"Lossartan"}
          manufacturer_name={"Neo Quimica"}
          indications_and_usage={"Dor"}
          route={"Oral"}
        />
        <DrugCard
          brand_name={"Lossartan"}
          generic_name={"Lossartan"}
          manufacturer_name={"Neo Quimica"}
          indications_and_usage={"Dor"}
          route={"Oral"}
        />
        <DrugCard
          brand_name={"Lossartan"}
          generic_name={"Lossartan"}
          manufacturer_name={"Neo Quimica"}
          indications_and_usage={"Dor"}
          route={"Oral"}
        />
        <DrugCard
          brand_name={"Lossartan"}
          generic_name={"Lossartan"}
          manufacturer_name={"Neo Quimica"}
          indications_and_usage={"Dor"}
          route={"Oral"}
        />
        <DrugCard
          brand_name={"Lossartan"}
          generic_name={"Lossartan"}
          manufacturer_name={"Neo Quimica"}
          indications_and_usage={"Dor"}
          route={"Oral"}
        />
      </div>
    </ScrollArea>
  );
}

export { SearchResultList };
