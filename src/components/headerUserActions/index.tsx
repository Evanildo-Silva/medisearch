import { useAppContext } from "@/shared/context/AppContext";
import { UserRound } from "lucide-react";

function HeaderUserActions() {
  const { clearStorage } = useAppContext();
  return (
    <div
      onClick={() => clearStorage()}
      className="hidden md:flex items-center gap-2 min-w-[8.5rem] hover:cursor-pointer mr-8 hover:scale-105 transition-transform duration-300"
    >
      <div className="flex justify-center items-center h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
        <UserRound className="w-5 h-5" />
      </div>
      <span>
        <p className="text-xs">Olá Bem-vindo!</p>
        <p className="text-sm text-yellow-primary">refresh</p>
      </span>
    </div>
  );
}

export { HeaderUserActions };
