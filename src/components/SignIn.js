import React from 'react';

export default class SignIn extends React.Component {

    singIn(e) {
        e.preventDefault();
        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;
        const api = this.props.api;
        const xhr = new XMLHttpRequest();
        const path = '/manger/signIn';
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
                alert('登入成功');
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
                            <input type="text" className="form-control mb-2" id="user" placeholder="帳號"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="密碼"/>
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
