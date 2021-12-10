import React, { useEffect, useState} from "react";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import { useFavorites } from 'hooks/useFavorites';

import {COUNTRIES}  from "constant";
import User from "components/User";
import * as S from "./style";

const FavoritesList = ( {favorites} ) => {

  const [hoveredUserId, setHoveredUserId] = useState();
  const [searchValue, setSearchValue] = useState([]);
  const {toggleFavorite, isFavorite} = useFavorites();

  useEffect(() => {
    console.log("Favorites List: ",favorites)
  }, [])

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
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
      }
      </S.List>
    </S.FavoritesList>
  );
};

export default FavoritesList;
