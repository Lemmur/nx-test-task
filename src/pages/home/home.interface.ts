import {Action} from "redux";
import {UserDataInterface} from "../../modules/users/users.interface";

export interface HomeComponentProps {
    users?: UserDataInterface[];
    usersLoading?: boolean;

    getUsers?(): Action;
}
