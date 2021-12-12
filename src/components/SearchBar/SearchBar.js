import React from "react";
import SearchBar from "material-ui-search-bar"

import * as S from "./style";

const Search = ({ onChange }) => {
  
 return (
    <S.SearchBar>
      <SearchBar 
        onChange={onChange}
        placeholder={"Search by Name, Email or Country"}
      />
    </S.SearchBar>
  );
};

export default Search;
