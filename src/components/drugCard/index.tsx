import { Heart } from "lucide-react";
import { useState } from "react";
import { MoreInfoDialog } from "../moreInfoDialog";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface DrugCardProps {
  brand_name: string;
  generic_name: string;
  manufacturer_name: string;
  indications_and_usage: string;
  route: string;
}
function DrugCard({
  brand_name,
  generic_name,
  manufacturer_name,
  indications_and_usage,
  route,
}: DrugCardProps) {
  const [isFavorited, setIsFavorited] = useState(false); // Estado para controlar o favorito

  // Função para alternar o estado de favoritar
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <Card className="w-full border rounded-lg shadow-lg overflow-hidden bg-white mb-2">
      <CardHeader>
        <CardTitle>{brand_name}</CardTitle>
        <CardDescription>{generic_name}</CardDescription>
      </CardHeader>
      <CardContent className="pb-6 px8">
        <p>
          <strong>Fabricante:</strong> {manufacturer_name}
        </p>
        <p>
          <strong>Indicações de Uso:</strong> {indications_and_usage}
        </p>
        <p>
          <strong>Via de Administração:</strong> {route}
        </p>
      </CardContent>
      <CardFooter className="p-4 bg-gray-100 flex justify-between items-center">
        <MoreInfoDialog
          brand_name={""}
          generic_name={""}
          manufacturer_name={""}
          indications_and_usage={""}
          dosage_and_administration={""}
          contraindications={""}
          adverse_reactions={""}
          drug_interactions={""}
          storage_and_handling={""}
          pregnancy={""}
          pharm_class_epc={""}
          route={""}
        />
        <Button
          onClick={toggleFavorite}
          className="flex justify-center items-center h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white hover:cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <Heart
            fill={isFavorited ? "#ef4444" : "none"}
            className="w-6 h-6 text-red-500"
          />
        </Button>
      </CardFooter>
    </Card>
  );
}

export { DrugCard };
