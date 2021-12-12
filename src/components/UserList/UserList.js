import React, { useState } from "react";
import { useFavorites } from "hooks/useFavorites";
import User from "components/User"
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";

import * as S from "./style";

const UserList = ({ users, isLoading, countries }) => {

  const [hoveredUserId, setHoveredUserId] = useState();
  const [selectedValue, setSelectedValue] = useState([]);
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const onChange = (value)=>{
    if(selectedValue.includes(value)){
      setSelectedValue(selectedValue.filter(val=> val !== value))
      return
    }
    setSelectedValue([...selectedValue, value])
  };

  const applyPeople = ()=>{
    let usersTmp = users;
    selectedValue.length && (usersTmp = users.filter( ({location: {country}}) => selectedValue.includes(country.toLowerCase())))
    
    return usersTmp
  };
  
  return (
    <S.UserList>
      <S.Filters>
        {
        countries.map((_country)=>(
          <CheckBox 
          key={_country}
          value={_country}
          label={_country.split(" ").map(word => word[0].toUpperCase()+word.slice(1)+" ")}
          onChange={()=> onChange(_country)}
          isChecked={selectedValue.includes(_country)}
          />
        ))}
      </S.Filters>
      <S.List>
        {applyPeople()
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
