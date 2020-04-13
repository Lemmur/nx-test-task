import * as React from 'react';
import {UserComponentProps} from "components/user/user.interface";
import "./user.less";

export const UserComponent: React.FC<UserComponentProps> = (props: UserComponentProps) => {
    const {name, email, phone} = props.user;
    return (
        <div className="user">
            <span className="user__name">{name}</span>
            <span className="user__email">{email}</span>
            <span className="user__phone">{phone}</span>
        </div>
    )
}

export default UserComponent;

