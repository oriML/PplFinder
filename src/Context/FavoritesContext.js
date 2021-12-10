import React, {  useEffect, useState, createContext } from "react";

export const FavoritesContext = createContext({ favorites: {} });

export const FavoritesProvider = ({ children }) =>{

    const [favorites, setFavorites] = useState(() => {
    
    const favoriteUsers = localStorage.getItem('favoritesPpl');
    if (favoriteUsers) {
        return JSON.parse(favoriteUsers)
    }
    return {}

    });

    useEffect(() => {
        localStorage.setItem('favoritesPpl', JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>

    );
};