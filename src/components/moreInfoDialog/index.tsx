import { Result } from "@/shared/services/listdrugs.dto";
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
  drugInfo: Result;
}

function MoreInfoDialog({ drugInfo }: MoreInfoDialogProps) {
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
              <h1 className="text-xl font-bold">Nome:</h1>
              <p>{drugInfo.openfda.brand_name ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Nome genérico:</h1>
              <p>{drugInfo.openfda.generic_name ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Nome do fabricante:</h1>
              <p>{drugInfo.openfda.manufacturer_name ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Indicações e uso:</h1>
              <p>{drugInfo.indications_and_usage ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Dosagem e Administração:</h1>
              <p>{drugInfo.dosage_and_administration ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Avisos:</h1>
              <p>{drugInfo.warnings ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Contraindicações:</h1>
              <p>{drugInfo.contraindications ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Reações adversas:</h1>
              <p>{drugInfo.adverse_reactions ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Interações medicamentosas:</h1>
              <p>{drugInfo.drug_interactions ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Armazenamento e manuseio:</h1>
              <p>{drugInfo.storage_and_handling ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Cuidados na maternidade:</h1>
              <p>
                {drugInfo.pregnancy_or_breast_feeding
                  ? drugInfo.pregnancy_or_breast_feeding
                  : drugInfo.pregnancy
                  ? drugInfo.pregnancy
                  : "-"}
              </p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Classe Farmacológica(EPC):</h1>
              <p>{drugInfo.openfda.pharm_class_epc ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Route:</h1>
              <p>{drugInfo.openfda.route ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Substância controlada:</h1>
              <p>{drugInfo.controlled_substance ?? "-"}</p>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold">Abuso:</h1>
              <p>{drugInfo.abuse ?? "-"}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export { MoreInfoDialog };
