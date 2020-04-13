import {Action} from 'redux';
import {UserFetchActions} from "./home.const";
import {UserDataInterface} from "./home.reducers";

export const getUsers = (): Action => {
  return {
    type: UserFetchActions.USERS_FETCHING
  }
};

export interface GetUsersSuccessAction extends Action { payload?: UserDataInterface[] }
export const getUsersSuccessAction = (payload: UserDataInterface[]): GetUsersSuccessAction => {
  return {
    type: UserFetchActions.USERS_FETCH_SUCCESS,
    payload
  }
};

export interface GetUsersErrorAction extends Action { payload?: string }
export const getUsersErrorAction = (payload: string): GetUsersErrorAction => {
  return {
    type: UserFetchActions.USERS_FETCH_ERROR,
    payload
  }
};
