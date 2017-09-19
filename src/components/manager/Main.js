import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
import Edit from './Edit';

export default class Main extends React.Component {
    componentWillMount() {
        const user = JSON.parse(window.localStorage.getItem('currentUser'));
        if (!user) this.props.history.push('/');
    }

    logout() {
        window.localStorage.removeItem('currentUser');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <header className="mb-4">
                    <div className="logo">LOGO</div>
                    <div className="title row no-gutters">
                        <div className="col-8">TITLE</div>
                        <div className="col-4 justify-content-end">
                            <button className="btn btn-warning" onClick={this.logout.bind(this)}>登出</button>
                        </div>
                    </div>
                </header>
                <div className="row no-gutters">
                    <div className="col-3 no-gutters">
                        <ul className="list-group">
                            <li className="list-group-item justify-content-center"><NavLink to="/manager/dashboard">管理頁面</NavLink></li>
                            <li className="list-group-item justify-content-center"><NavLink to="/manager/edit">新增</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-9 no-gutters">
                        <Switch>
                            <Route path="/manager/dashboard" render={props => <Dashboard {...props} />} />
                            <Route path="/manager/edit" render={props => <Edit {...props} api={this.props.api} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

