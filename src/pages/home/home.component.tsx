import * as React from 'react';
import {connect} from "react-redux";
import {getUsers} from "./home.actions";
import {AppStateInterface} from "../../app.reducer";
import {HomeComponentProps} from "./home.interface";
import UserComponent from "components/user/user.component";

class HomeComponent extends React.Component<HomeComponentProps, {}> {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <>
                {this.props.users.map((user, idx) => {
                    return <UserComponent key={idx} user={user}/>;
                })}
            </>
        )
    }
}

function mapStateToProps(state: AppStateInterface) {
    return {
        users: state.home.users
    }
}

export default connect(mapStateToProps, {
    getUsers
})(HomeComponent);

