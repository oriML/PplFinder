import React, { useEffect, useState, useContext } from "react";
import { FavoritesContext } from "Context/FavoritesContext";
import { useFavorites } from "hooks/useFavorites";
import User from "components/User"
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import {COUNTRIES}  from "constant";

import * as S from "./style";

const UserList = ({ users, isLoading }) => {

  const [hoveredUserId, setHoveredUserId] = useState();
  const [searchValue, setSearchValue] = useState([]);
  const [favoriteUserId, setFavoriteUserId] = useState([]);
  const {favorites, setFavorites} = useContext(FavoritesContext);
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  // const toggleFavorite = (user)=>{
  //   if(favoriteUserId.includes(user.login.uuid)){
  //     setFavoriteUserId(favoriteUserId.filter(value=> value !== user.login.uuid))
  //     setFavorites(favorites[user.login.uuid].filter(favorite=> favorite.login.uuid !== user.login.uuid))
  //     return
  //   }
  //   setFavoriteUserId([...favoriteUserId, user.login.uuid]);
  //   setFavorites({...favorites, user})
  //   console.log(favorites);
  // }

  const onChange = (value)=>{
    if(searchValue.includes(value)){
      setSearchValue(searchValue.filter(val=> val !== value))
      return
    }
    setSearchValue([...searchValue, value])
  };

  const applyUsers = ()=>{
    let usersTmp = users;
    searchValue.length && (usersTmp = users.filter(({nat}) => searchValue.includes(nat)))
    
    return usersTmp
  };
  

  return (
    <S.UserList>
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
        {console.log(users)}
        {applyUsers()
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
        }
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
