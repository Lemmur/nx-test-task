import {combineReducers, Action} from 'redux';
import {UserFetchActions} from "./home.const";
import {GetUsersErrorAction, GetUsersSuccessAction} from "./home.actions";
import {UserDataInterface} from "../../modules/users/users.interface";
import {HomeStateInterface} from "../../app.reducer";

export function usersReducer(state: UserDataInterface[] = [], action: GetUsersSuccessAction) {
    switch (action.type) {
        case UserFetchActions.USERS_FETCH_SUCCESS:
            return action.payload;
        case UserFetchActions.USERS_FETCH_ERROR:
        case UserFetchActions.USERS_FETCHING:
            return [];
        default:
            return state;
    }
}

export function usersLoadingReducer(state = false, action: Action) {
    switch (action.type) {
        case UserFetchActions.USERS_FETCHING:
            return true;
        case UserFetchActions.USERS_FETCH_SUCCESS:
        case UserFetchActions.USERS_FETCH_ERROR:
            return false;
        default:
            return state;
    }
}

export function usersLoadingErrorReducer(state = '', action: GetUsersErrorAction) {
    switch (action.type) {
        case UserFetchActions.USERS_FETCH_ERROR:
            return action.payload;
        case UserFetchActions.USERS_FETCH_SUCCESS:
        case UserFetchActions.USERS_FETCHING:
            return '';
        default:
            return state;
    }
}

export const homeReducer = combineReducers<HomeStateInterface>({
    users: usersReducer,
    usersLoadingError: usersLoadingErrorReducer,
    usersLoading: usersLoadingReducer
});
