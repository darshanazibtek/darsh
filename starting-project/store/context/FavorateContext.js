import { createContext, useState } from "react";

export const FavorateContext = createContext({
    ids: [],
    addFavorate: id => {},
    removeFavorate: id => {},
});

function FavorateContextProvider({ children }) {
    const [favorateMealId, setFavorateMealId] = useState([]);

    function addFavorate(id) {
        setFavorateMealId(current => [...current, id]);
    }

    function removeFavorate(id) {
        setFavorateMealId(current => current.filter(mealId => mealId != id));
    }

    const value = {
        ids: favorateMealId,
        addFavorate: addFavorate,
        removeFavorate: removeFavorate,
    };

    return (
        <FavorateContext.Provider value={value}>
            {children}
        </FavorateContext.Provider>
    );
}

export default FavorateContextProvider;
