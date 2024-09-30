import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, UserContainer, UsersListContainer } from "./styles";
import { onLoadDashboardUsers } from "../../redux/actions/dashboard-actions";
import { User } from "../../components/User";

export const MainContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.dashboard.users);

  useEffect(() => {
    dispatch(onLoadDashboardUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h1>Users</h1>

      <UsersListContainer>
        {users.map((user) => (
          <UserContainer key={`user-${user.id}`}>
            <User user={user}/>
          </UserContainer>
        ))}
      </UsersListContainer>
    </Container>
  );
};
