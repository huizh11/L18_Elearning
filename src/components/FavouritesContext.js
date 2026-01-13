// FavouritesContext.js
import { createContext, useContext, useMemo, useState } from "react";

const FavouritesContext = createContext(null);

export function FavouritesProvider({ children }) {
  const [favs, setFavs] = useState([]); 
  // each item: { diplomaId, moduleId }

  function toggleFavourite(item) {
    setFavs((prev) => {
      const exists = prev.some((x) => x.diplomaId === item.diplomaId && x.moduleId === item.moduleId);
      if (exists) return prev.filter((x) => !(x.diplomaId === item.diplomaId && x.moduleId === item.moduleId));
      return [...prev, item];
    });
  }

  function isFavourite(item) {
    return favs.some((x) => x.diplomaId === item.diplomaId && x.moduleId === item.moduleId);
  }

  const value = useMemo(() => ({ favs, toggleFavourite, isFavourite }), [favs]);

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}

export function useFavourites() {
  return useContext(FavouritesContext);
}
