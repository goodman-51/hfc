import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, UserContainer, UsersListContainer, StyledUser, ButtonPrimary } from "./styles";
import { onLoadDashboardUsers } from "../../redux/actions/dashboard-actions";

export const MainContainer = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const users = useSelector((state) => state.dashboard.users);

  useEffect(() => {
    dispatch(onLoadDashboardUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <input
        type="text"
        placeholder="Search users"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ButtonPrimary onClick={() => dispatch(onLoadDashboardUsers(searchQuery))}>
        SEARCH
      </ButtonPrimary>

      <UsersListContainer>
        {users.map((user) => (
          <UserContainer key={`user-${user.id}`}>
            <StyledUser user={user}/>
          </UserContainer>
        ))}
      </UsersListContainer>
    </Container>
  );
};
