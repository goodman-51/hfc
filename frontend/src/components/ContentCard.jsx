import React from "react";
import { useDispatch } from "react-redux";
import { onSetUserContentStatus } from "../redux/actions/dashboard-actions";

export const ContentCard = ({ post }) => {
  const dispatch = useDispatch();

  const showApproveButton = ['pending', 'rejected'].includes(post.status);
  const showRejectButton = ['pending', 'approved'].includes(post.status);

  return (
    <div>
      <h3>{post.status}</h3>
      <img src={post.url} alt="User content"></img>
      { showRejectButton && 
        <button onClick={() => dispatch(onSetUserContentStatus(post.userId, post.id, 'rejected'))}>Reject</button> 
      }
      { showApproveButton &&
        <button onClick={() => dispatch(onSetUserContentStatus(post.userId, post.id, 'approved'))}>Approve</button>
      }
    </div>
  );
};