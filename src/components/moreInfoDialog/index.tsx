import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"; // Importe o dialog do Shadcn
import { ScrollArea } from "../ui/scroll-area";

interface MoreInfoDialogProps {
  brand_name: string;
  generic_name: string;
  manufacturer_name: string;
  indications_and_usage: string;
  dosage_and_administration: string;
  contraindications: string;
  warnings?: string;
  adverse_reactions: string;
  drug_interactions: string;
  storage_and_handling: string;
  pregnancy: string;
  pharm_class_epc: string;
  route: string;
}

function MoreInfoDialog({
  brand_name,
  generic_name,
  manufacturer_name,
  indications_and_usage,
  dosage_and_administration,
  contraindications,
  warnings,
  adverse_reactions,
  drug_interactions,
  storage_and_handling,
  pregnancy,
  pharm_class_epc,
  route,
}: MoreInfoDialogProps) {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar abertura/fechamento do dialog

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-blue-600 font-semibold"
          onClick={() => setIsOpen(true)}
        >
          Mais Informações
        </Button>
      </DialogTrigger>

      {/* Conteúdo do diálogo */}
      <DialogContent className="max-w-4xl md:max-w-2xl sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Informações do Medicamento
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[45vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="text-left">
              <h1 className="text-xl font-bold">Brand Name:</h1>
              <p>{brand_name}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Generic Name:</h1>
              <p>{generic_name}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Manufacturer Name:</h1>
              <p>{manufacturer_name}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Indications and Usage:</h1>
              <p>{indications_and_usage}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Dosage and Administration:</h1>
              <p>{dosage_and_administration}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Contraindications:</h1>
              <p>{contraindications}</p>
            </div>
            {warnings && (
              <div className="text-left">
                <h1 className="text-xl font-bold">Warnings:</h1>
                <p>{warnings}</p>
              </div>
            )}
            <div className="text-left">
              <h1 className="text-xl font-bold">Adverse Reactions:</h1>
              <p>{adverse_reactions}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Drug Interactions:</h1>
              <p>{drug_interactions}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Storage and Handling:</h1>
              <p>{storage_and_handling}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Pregnancy:</h1>
              <p>{pregnancy}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Pharmacologic Class (EPC):</h1>
              <p>{pharm_class_epc}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Route:</h1>
              <p>{route}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export { MoreInfoDialog };
