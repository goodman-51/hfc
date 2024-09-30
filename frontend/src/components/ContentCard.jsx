import React from "react";
import { useDispatch } from "react-redux";
import { onSetUserContentStatus } from "../redux/actions/dashboard-actions";
import {
  ImageContainer,
  Image,
  Approved,
  Pending,
  Rejected,
  Title,
  ButtonGroup,
  Button,
  ButtonPrimary,
  Line
} from "../containers/main/styles";

export const ContentCard = ({ className, post }) => {
  const dispatch = useDispatch();

  const showApproveButton = ['pending', 'rejected'].includes(post.status);
  const showRejectButton = ['pending', 'approved'].includes(post.status);

  const displayStatus = post.status.toUpperCase();

  return (
    <div className={className}>
      <ImageContainer>
        { post.status === 'approved' && <Approved>{displayStatus}</Approved> }
        { post.status === 'pending' && <Pending>{displayStatus}</Pending> }
        { post.status === 'rejected' && <Rejected>{displayStatus}</Rejected> }

        <Image src={post.url} alt="User content"></Image>

        <Title>{post.title || 'Untitled'}</Title>
      </ImageContainer>

      <Line/>

      <ButtonGroup>
        { showRejectButton && 
          <Button onClick={() => dispatch(onSetUserContentStatus(post.userId, post.id, 'rejected'))}>REJECT</Button> 
        }

        { showApproveButton &&
          <ButtonPrimary onClick={() => dispatch(onSetUserContentStatus(post.userId, post.id, 'approved'))}>APPROVE</ButtonPrimary>
        }
      </ButtonGroup>
    </div>
  );
};