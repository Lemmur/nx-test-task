import {takeEvery, put, call} from 'redux-saga/effects'
import {UserFetchActions} from "./home.const";
import {getUsersList} from "../../modules/users/users.service";
import {getUsersErrorAction, getUsersSuccessAction} from "./home.actions";

export function* getUsers() {
    const response = yield call(getUsersList);
    if (response.status === 200) {
        yield put(getUsersSuccessAction(response.data));
    } else {
        yield put(getUsersErrorAction('Something went wrong'));
    }

}

export function* usersSaga() {
    yield takeEvery(UserFetchActions.USERS_FETCHING, getUsers);
}
