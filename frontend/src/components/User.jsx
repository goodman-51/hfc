import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onLoadUserContent } from "../redux/actions/dashboard-actions";
import { ButtonPrimary, ContentContainer, StyledContentCard } from "../containers/main/styles";

export const User = ({ className, user }) => {
  const dispatch = useDispatch();

  const userContent = useSelector((state) => state.dashboard.posts[user.id]);
  const contentLoading = useSelector((state) => state.dashboard.users.find(u => u.id === user.id).contentLoading);

  return (
    <div className={className}>
      <h3>{user.name}</h3>
      { contentLoading !== 'loaded' && 
        <ButtonPrimary
          onClick={() => dispatch(onLoadUserContent(user.id)) }
          disabled={contentLoading === 'loading'}
        >
          SEE CONTENT
        </ButtonPrimary> }
      <ContentContainer>
        {userContent && userContent.map((post) => <StyledContentCard post={post} key={post.id}/>)}
      </ContentContainer>
    </div>
  )
};