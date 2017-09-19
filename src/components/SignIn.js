import React from 'react';

export default class SignIn extends React.Component {

    componentWillMount() {
        const user = JSON.parse(window.localStorage.getItem('currentUser'));
        if (!user) {
            return;
        }
        if (user.user_id && user.username && user.token) {
            this.props.history.push('/manager/dashboard');
        }
    }

    singIn(e) {
        e.preventDefault();
        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;
        const api = this.props.api;
        const xhr = new XMLHttpRequest();
        const path = '/user/signIn';

        if (user.indexOf('\"') !== -1 || user.indexOf('\'') !== -1) {
            alert('帳號不可有特殊符號');
            return;
        }

        if (user.indexOf('\"') !== -1 || password.indexOf('\'') !== -1) {
            alert('密碼不可有特殊符號');
            return;
        }

        xhr.open("POST", api + path);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            user,
            password
        }));
        xhr.onload = () => {
            console.log(xhr.responseText);
            if (xhr.status === 200) {
                window.localStorage.setItem('currentUser', xhr.responseText);
                alert('登入成功');
                this.props.history.push('/manager/dashboard');
            } else {
                alert('帳號或密碼錯誤');
            }
        };
    }

    render() {
        return (
            <div className="row justify-content-center h-400">
                <div className="col-sm-6 align-self-center">
                    <form onSubmit={this.singIn.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control mb-2" id="user" placeholder="帳號" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="密碼" required/>
                        </div>
                        <button className="btn btn-outline-secondary" type="submit">登入</button>
                    </form>
                </div>
            </div>
        );
    }
}

SignIn.propTypes = {
    api: React.PropTypes.string.isRequired
};
