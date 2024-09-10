import { DrugCard } from "@/components/drugCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppContext } from "@/shared/context/AppContext";

function FavoritesPage() {
  const { favorites, addFavorite, removeFavorite } = useAppContext();
  return (
    <ScrollArea className="h-[75vh] md:mx-6 mt-6 p-3 rounded-lg flex justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {favorites &&
          favorites.map((drug) => (
            <DrugCard
              key={drug.id}
              isFavorite={favorites.some((fav) => fav.id === drug.id)}
              brand_name={drug.openfda.brand_name[0]}
              generic_name={
                drug.openfda.generic_name ? drug.openfda.generic_name[0] : "N/A"
              }
              manufacturer_name={
                drug.openfda.manufacturer_name
                  ? drug.openfda.manufacturer_name[0]
                  : "N/A"
              }
              active_ingredient={
                drug.active_ingredient ? drug.active_ingredient[0] : "N/A"
              }
              route={drug.openfda.route ? drug.openfda.route[0] : "N/A"}
              drugInfo={drug}
              toggleFunction={() =>
                favorites.some((fav) => fav.id === drug.id)
                  ? removeFavorite(drug.id)
                  : addFavorite(drug)
              }
            />
          ))}
      </div>
    </ScrollArea>
  );
}

export { FavoritesPage };
