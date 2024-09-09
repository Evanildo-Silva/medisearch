import { PopoverTrigger } from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import { HeaderFavoritesActions } from "../headerFavoritesActions";
import { HeaderUserActions } from "../headerUserActions";
import { SearchInput } from "../searchInput";
import { Popover, PopoverContent } from "../ui/popover";

function Navbar() {
  return (
    <div className="ligth">
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
                  <span>
                    <p className="text-xs">Meus favoritos</p>
                    <p className="text-sm text-yellow-primary">{"Vazio"}</p>
                  </span>
                </PopoverContent>
              </Popover>
            </div>
            <SearchInput />
            <HeaderUserActions />
            <HeaderFavoritesActions favorites={10} />
          </nav>
        </div>
      </header>
    </div>
  );
}

export { Navbar };
