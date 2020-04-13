import * as React from 'react';
import {UserComponentProps} from "components/user/user.interface";
import "./user.less";

class UserComponent extends React.Component<UserComponentProps, {}> {
    render() {
        return (
            <div className="user">
                <span className="name">{this.props.user.name}</span>
                <span className="email">{this.props.user.email}</span>
                <span className="phone">{this.props.user.phone}</span>
            </div>
        )
    }
}

export default UserComponent;

