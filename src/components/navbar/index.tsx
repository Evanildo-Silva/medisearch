import { useAppContext } from "@/shared/context/AppContext";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { ArrowLeft, Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderFavoritesActions } from "../headerFavoritesActions";
import { HeaderUserActions } from "../headerUserActions";
import { SearchInput } from "../searchInput";
import { Badge } from "../ui/badge";
import { Popover, PopoverContent } from "../ui/popover";

type NavbarProps = {
  value: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Navbar({ value, onInputChange }: NavbarProps) {
  const { favorites } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="h-24 md:h-20 bg-white">
      <div className="max-w-[70rem] h-20 mx-auto md:px-8 px-4 flex items-center justify-between">
        <nav className="flex flex-col md:flex-row items-center w-full gap-x-2 md:gap-x-8">
          <div className="flex justify-between items-center w-full md:w-fit px-2 md:px-0 py-2">
            <img
              src="../../public/logo-medi-search.png"
              alt="Logo Medi Search"
              className="w-20 md:w-36"
            />

            <Popover>
              <PopoverTrigger>
                <Menu className="md:hidden" />
              </PopoverTrigger>
              <PopoverContent className="flex flex-col w-fit mr-3 gap-3">
                <span>
                  <p className="text-xs">{`Olá, ${"Bem-vindo!"}`}</p>
                  <p className="text-sm text-yellow-primary">{"Entrar"}</p>
                </span>
                {location.pathname === "/favoritos" ? (
                  <button
                    onClick={() => navigate(-1)}
                    className="flex justify-center items-center h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white hover:cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <ArrowLeft className="w-6 h-6 text-black" />
                  </button>
                ) : (
                  <span
                    className="hover:cursor-pointer"
                    onClick={() =>
                      favorites.length > 0 && navigate("/favoritos")
                    }
                  >
                    <p className="text-xs">Meus favoritos</p>
                    {favorites.length > 0 ? (
                      <Badge variant="secondary">
                        <p className="text-sm text-yellow-primary">
                          {favorites.length}
                        </p>
                      </Badge>
                    ) : (
                      <p className="text-sm text-yellow-primary">Vazio</p>
                    )}
                  </span>
                )}
              </PopoverContent>
            </Popover>
          </div>
          {location.pathname !== "/favoritos" ? (
            <SearchInput value={value} onChange={(e) => onInputChange(e)} />
          ) : (
            <div className="w-96"></div>
          )}
          <HeaderUserActions />
          {location.pathname === "/favoritos" ? (
            <button
              onClick={() => navigate(-1)}
              className="hidden md:flex justify-center items-center h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white hover:cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-black" />
            </button>
          ) : (
            <HeaderFavoritesActions favorites={favorites.length} />
          )}
        </nav>
      </div>
    </header>
  );
}

export { Navbar };
