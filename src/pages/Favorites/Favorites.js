import React from "react";
import { useFavorites } from 'hooks/useFavorites';
import FavoritesList from "components/Favorites/FavoritesList";
import Text from "components/Text";
import * as S from "./style";

const Favorites = () => {
    const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            My ♥
          </Text>
          </S.Header>{console.log(favorites)}
        <FavoritesList users={favorites, toggleFavorite, isFavorite}  />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
