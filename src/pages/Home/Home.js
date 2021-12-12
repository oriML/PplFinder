import React, { useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {

 const { users, isLoading } =  usePeopleFetch();
 const countries = Array.from(new Set(users.map(user => user.location.country.toLowerCase())))

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
      <UserList users={users} isLoading={isLoading} countries={countries} />
      </S.Content>
    </S.Home>
  );
};

export default Home;