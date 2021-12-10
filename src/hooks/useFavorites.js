import React, { useContext } from "react";
import {FavoritesContext} from "Context/FavoritesContext"

export const useFavorites = () => {

const { favorites, setFavorites } = useContext(FavoritesContext);

    //sets the return value to boolean (if id exists -> true)
    const isFavorite = user => Boolean(favorites[getId(user)]);

    const getId = user => user.login.uuid;

    const toggleFavorite = (user) => {
      setFavorites(prevFavorites => {
          const { [getId(user)]: targetUser, ...restOfTheFavorites } = prevFavorites;
          // remove the user from favorites
          if (targetUser) return restOfTheFavorites
          // adds favorite
          return { ...prevFavorites, [getId(user)]: user };
        });
    }

    return { toggleFavorite, isFavorite, favorites: Object.values(favorites) };
};