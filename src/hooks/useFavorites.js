import React, { useContext } from "react";
import {FavoritesContext} from "Context/FavoritesContext"

export const useFavorites = () => {

const { favorites, setFavorites } = useContext(FavoritesContext);

    //sets the return value to boolean (if id exists -> true)
    const isFavorite = user => Boolean(favorites[getId(user)]);

    const getId = user => user.login.uuid;

    const toggleFavorite = (user) => {
      
      setFavorites(prevFavorites => {
          // destructuring from the object
          const { [getId(user)]: targetUser, ...restOfTheFavorites } = prevFavorites;
            if (targetUser) return restOfTheFavorites

          // set new user to the object
          return { ...prevFavorites, [getId(user)]: user };
        });
    }

    return { toggleFavorite, isFavorite, favorites: Object.values(favorites) };
};