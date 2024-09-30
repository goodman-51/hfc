import { DashboardActions } from "../action-types/dashboard-action-types";

const initialState = {
  users: [],
  posts: {}, // UserId -> List of posts
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case DashboardActions.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case DashboardActions.RESET_STATE:
      return initialState;
    case DashboardActions.SET_LOADING_CONTENT:
      const userIndex = state.users.findIndex(u => u.id === action.payload.userId);
      const newUserStatus = { ...state.users[userIndex], contentLoading: action.payload.status };
      const users = state.users.toSpliced(userIndex, 1, newUserStatus);

      return {
        ...state,
        users
      };
    case DashboardActions.SET_USER_CONTENT:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.userId]: action.payload.content,
        },
      };
    case DashboardActions.SET_CONTENT_STATUS:
      const userPosts = state.posts[action.payload.userId];
      const postIndex = userPosts.findIndex(p => p.id === action.payload.postId);
      const newPostsForUser = userPosts.toSpliced(postIndex, 1, { ...userPosts[postIndex], status: action.payload.status });

      return {
        ...state,
        posts: {
          ...state.posts,
          [action.payload.userId]: newPostsForUser,
        },
      };
    default:
      return state;
  }
};
