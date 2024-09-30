import { getUsers, getUserContent, setContentStatus } from "../../services/user.service";
import { DashboardActions } from "../action-types/dashboard-action-types";

export const onLoadDashboardUsers = (query = null) => async (dispatch) => {
  try {
    dispatch({ type: DashboardActions.SET_LOADING_USERS, payload: true });
    const response = await getUsers(query);
    dispatch({ type: DashboardActions.SET_USERS, payload: response.data });
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: DashboardActions.SET_LOADING_USERS, payload: false });
  }
};

export const onLoadUserContent = (userId) => async (dispatch) => {
  try {
    dispatch({ type: DashboardActions.SET_LOADING_CONTENT, payload: { status: 'loading', userId } });
    const response = await getUserContent(userId);
    dispatch({ type: DashboardActions.SET_USER_CONTENT, payload: { userId, content: response.data }});
  } catch (error) {
    dispatch({ type: DashboardActions.SET_LOADING_CONTENT, payload: { status: 'failed', userId } });
    console.error(error);
  } finally {
    dispatch({ type: DashboardActions.SET_LOADING_CONTENT, payload: { status: 'loaded', userId } });
  }
};

export const onSetUserContentStatus = (userId, postId, status) => async (dispatch) => {
  try {
    dispatch({ type: DashboardActions.SET_CONTENT_STATUS_LOADING, payload: true });
    const response = await setContentStatus(postId, status);
    dispatch({ type: DashboardActions.SET_CONTENT_STATUS, payload: { userId, postId, status: response.data }});
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: DashboardActions.SET_CONTENT_STATUS_LOADING, payload: false });
  }
};