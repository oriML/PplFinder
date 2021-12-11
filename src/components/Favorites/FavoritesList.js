import React, { useEffect, useState} from "react";
import CheckBox from "components/CheckBox";
import { useFavorites } from 'hooks/useFavorites';
import Text from "components/Text";
import {COUNTRIES}  from "constant";
import User from "components/User";
import * as S from "./style";

const FavoritesList = ( {favorites} ) => {

  const [hoveredUserId, setHoveredUserId] = useState();
  const [searchValue, setSearchValue] = useState([]);
  const {toggleFavorite, isFavorite} = useFavorites();

  const applyUsers = ()=>{
    let usersTmp = favorites.length? favorites : [];
    searchValue.length && (usersTmp = favorites.filter(({nat}) => searchValue.includes(nat) ))
    
    return usersTmp
  };

  const onChange = (value)=>{
    if(searchValue.includes(value)){
      setSearchValue(searchValue.filter(val=> val !== value))
      return
    }
    setSearchValue([...searchValue, value])
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
        COUNTRIES.map(({_id, _country})=>(
          <CheckBox 
          key={_id}
          value={_id}
          label={_country[0].toUpperCase() + _country.slice(1)}
          onChange={()=> onChange(_id)}
          
          />
        ))}
      </S.Filters>
      <S.List>
        { favorites.length?
        applyUsers()
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
