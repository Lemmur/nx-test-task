import * as React from 'react';
import {connect} from "react-redux";
import {getUsers} from "./home.actions";
import {AppStateInterface} from "../../app.reducer";
import {HomeComponentProps} from "./home.interface";
import UserComponent from "components/user/user.component";
import "./home.less";

class HomeComponent extends React.Component<HomeComponentProps, {}> {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return !this.props.usersLoading ? (
            <>
                {this.props.users.map((user, idx) => {
                    return <UserComponent key={idx} user={user}/>;
                })}
            </>
        ) : (<div className="loading">Loading...</div>);
    }
}

const mapStateToProps = (state: AppStateInterface) => {
    return {
        users: state.home.users,
        usersLoading: state.home.usersLoading
    }
};

export default connect(mapStateToProps, {
    getUsers
})(HomeComponent);

