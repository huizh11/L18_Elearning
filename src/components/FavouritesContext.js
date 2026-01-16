// FavouritesContext.js
import { createContext, useContext, useMemo, useState, useCallback } from "react";

const FavouritesContext = createContext(null);

export function FavouritesProvider({ children }) {
  const [favs, setFavs] = useState([]);

  const toggleFavourite = useCallback((item) => {
    setFavs((prev) => {
      const exists = prev.some(
        (x) => x.diplomaId === item.diplomaId && x.moduleId === item.moduleId
      );

      if (exists) {
        return prev.filter(
          (x) =>
            !(x.diplomaId === item.diplomaId && x.moduleId === item.moduleId)
        );
      }

      return [...prev, item];
    });
  }, []);

  const isFavourite = useCallback(
    (item) =>
      favs.some(
        (x) => x.diplomaId === item.diplomaId && x.moduleId === item.moduleId
      ),
    [favs]
  );

  const value = useMemo(
    () => ({ favs, toggleFavourite, isFavourite }),
    [favs, toggleFavourite, isFavourite]
  );

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavouritesContext);
}
