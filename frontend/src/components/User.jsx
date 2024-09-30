import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { onLoadUserContent } from "../redux/actions/dashboard-actions";
import { ContentCard } from "./ContentCard";

export const User = ({ user }) => {
  const dispatch = useDispatch();

  const userContent = useSelector((state) => state.dashboard.posts[user.id]);
  const contentLoading = useSelector((state) => state.dashboard.users.find(u => u.id === user.id).contentLoading);

  return (
    <div>
      <h3>{user.name}</h3>
      { contentLoading !== 'loaded' && 
        <button onClick={() => dispatch(onLoadUserContent(user.id)) } disabled={contentLoading === 'loading'}>
        View Content
      </button> }
      {userContent && userContent.map((post) => <ContentCard post={post} key={post.id}/>)}
    </div>
  )
};