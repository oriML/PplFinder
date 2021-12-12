import React, { useEffect } from "react";
import { useFavorites } from 'hooks/useFavorites';
import FavoritesList from "components/Favorites/FavoritesList";
import Text from "components/Text";
import * as S from "./style";

const Favorites = () => {
  
  const { favorites } = useFavorites();
  
  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="60px" bold>
            My Favorites
          </Text>
        </S.Header>
        <FavoritesList favorites={favorites} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
