import {Action} from "redux";
import {UserDataInterface} from "./home.reducers";

export interface HomeStateInterface {
    users: UserDataInterface[];
    usersLoading: boolean;
    usersLoadingError: string;
}

export interface HomeComponentProps {
    users?: UserDataInterface[];
    usersLoading?: boolean;

    getUsers?(): Action;
}
