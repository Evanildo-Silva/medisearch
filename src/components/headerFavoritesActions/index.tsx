import { Heart } from "lucide-react";
import { Badge } from "../ui/badge";

type HeaderFavoritesActionsProps = {
  favorites: number;
};

function HeaderFavoritesActions({ favorites }: HeaderFavoritesActionsProps) {
  return (
    <div className="hidden md:flex items-center gap-2 min-w-[8.5rem] hover:cursor-pointer mr-8 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center items-center h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
        <Heart fill="#ef4444" className="w-5 h-5 text-red-500" />
      </div>
      <span>
        <p className="text-xs">Meus favoritos</p>
        {favorites > 0 ? (
          <Badge variant="secondary">
            <p className="text-sm text-yellow-primary">{favorites}</p>
          </Badge>
        ) : (
          <p className="text-sm text-yellow-primary">Vazio</p>
        )}
      </span>
    </div>
  );
}

export { HeaderFavoritesActions };
