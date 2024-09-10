import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Result } from "../services/listdrugs.dto";

interface AppContextProps {
  drugInfoList: Result[];
  setDrugInfoList: (list: Result[]) => void;
  favorites: Result[];
  addFavorite: (drug: Result) => void;
  removeFavorite: (id: string) => void;
  clearStorage: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const STORAGE_KEY = "favorites";

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [drugInfoList, setDrugInfoList] = useState<Result[]>([]);
  const [favorites, setFavorites] = useState<Result[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (drug: Result) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.find((fav) => fav.id === drug.id)) {
        return [...prevFavorites, drug];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== id)
    );
  };

  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const value = {
    drugInfoList,
    setDrugInfoList,
    favorites,
    addFavorite,
    removeFavorite,
    clearStorage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};

export { AppContextProvider, useAppContext };
