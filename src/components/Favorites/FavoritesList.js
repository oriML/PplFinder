import React, { useState } from "react";
import SearchBar from "components/SearchBar";
import { useFavorites } from 'hooks/useFavorites';
import Text from "components/Text";
import User  from "components/User";

import * as S from "./style";

const FavoritesList = ( {favorites} ) => {

  const [hoveredUserId, setHoveredUserId] = useState();
  const [searchValue, setSearchValue] = useState("");
  const {toggleFavorite, isFavorite} = useFavorites();

  const applyFavorites = ()=>{
    
    let usersTmp = 
    favorites.length?
    searchValue.length ? 
    
      favorites.filter(({location:{country},name:{title, first, last}, email}) => {
        return [country,title ,first ,last ,email]
              .some((value)=>value.toLowerCase().includes(searchValue))
    })
    : favorites
    : [];

    return usersTmp
  };
  
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  return (
    <S.FavoritesList>
      <S.Filters>
    
        {
        <SearchBar 
          value={searchValue}
          onChange={(newValue) => setSearchValue(newValue)}
            
          />
          }
      </S.Filters>
      <S.List>
        { favorites.length?
        applyFavorites()
        .map((user, index) => {
          return (
            <User
              user={user}
              index={index}
              key={index}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              hoveredUserId={hoveredUserId}

            />

          );
        })
        
        :
        
        <Text size="20px">
          No Favorites. Click on the ♥ Icon to add some.
        </Text>
      }
      </S.List>
    </S.FavoritesList>
  );
};

export default FavoritesList;
