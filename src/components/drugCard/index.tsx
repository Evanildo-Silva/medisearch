import { Result } from "@/shared/services/listdrugs.dto";
import { Heart } from "lucide-react";
import { MoreInfoDialog } from "../moreInfoDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

interface DrugCardProps {
  brand_name?: string;
  generic_name?: string;
  manufacturer_name?: string;
  active_ingredient?: string;
  route?: string;
  drugInfo: Result;
  isFavorite: boolean;
  toggleFunction: () => void;
}
function DrugCard({
  brand_name,
  generic_name,
  manufacturer_name,
  active_ingredient,
  route,
  drugInfo,
  isFavorite,
  toggleFunction,
}: DrugCardProps) {
  return (
    <Card className="w-full border rounded-lg shadow-lg overflow-hidden bg-white mb-2">
      <CardHeader>
        {brand_name && <CardTitle>{brand_name}</CardTitle>}
        <ScrollArea className="h-8">
          {generic_name && <CardDescription>{generic_name}</CardDescription>}
        </ScrollArea>
      </CardHeader>
      <ScrollArea className="h-[100px]">
        <CardContent className="pb-3 px-8">
          {manufacturer_name && (
            <p>
              <strong>Fabricante:</strong> {manufacturer_name}
            </p>
          )}
          {active_ingredient && (
            <p>
              <strong>Ingrediente ativo:</strong> {active_ingredient}
            </p>
          )}
          {route && (
            <p>
              <strong>Via de Administração:</strong> {route}
            </p>
          )}
        </CardContent>
      </ScrollArea>
      <CardFooter className="p-4 bg-gray-100 flex justify-between items-center">
        <MoreInfoDialog drugInfo={drugInfo} />
        <button
          onClick={toggleFunction}
          className="flex justify-center items-center h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white hover:cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <Heart
            fill={isFavorite ? "#ef4444" : "none"}
            className="w-6 h-6 text-red-500"
          />
        </button>
      </CardFooter>
    </Card>
  );
}

export { DrugCard };
