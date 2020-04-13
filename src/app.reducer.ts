import {UserDataInterface} from "./modules/users/users.interface";

export interface HomeStateInterface {
    users: UserDataInterface[];
    usersLoading: boolean;
    usersLoadingError: string;
}

export interface AppStateInterface {
    home: HomeStateInterface;
}




