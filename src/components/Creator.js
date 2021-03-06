import React from 'react';
import { connectApi } from '../services/connectApi';

export default class Creator extends React.Component {

    createUser(e) {
        e.preventDefault();
        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;
        const level = document.querySelector('input[name="level"]:checked').value;
        const api = this.props.api;
        const xhr = new XMLHttpRequest();
        const path = '/creator/createUser';

        if (user.indexOf('\"') !== -1 || user.indexOf('\'') !== -1) {
            alert('帳號不可有特殊符號');
            return;
        }

        if (user.indexOf('\"') !== -1 || password.indexOf('\'') !== -1) {
            alert('密碼不可有特殊符號');
            return;
        }

        connectApi('POST', api + path, JSON.stringify({ user, password, level }), (message) => {
            if (message === 'success') {
                document.getElementById('user').value = '';
                document.getElementById('password').value = '';
                alert(`新增成功${user}, 權限: ${level}`);
            } else {
                alert(`錯誤: + ${xhr.response}`);
            }
        });
    }

    render() {
        return (
            <div className="row justify-content-center h-400">
                <div className="col-sm-6 align-self-center">
                    <form onSubmit={this.createUser.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control mb-2" id="user" placeholder="帳號" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="password" placeholder="密碼" required/>
                        </div>
                        <fieldset className="form-group">
                            <legend>選擇管理員等級</legend>
                            <div className="form-check">
                                <label htmlFor="level1" className="form-check-label">
                                    <input type="radio" className="form-check-input" name="level" id="level1" value="1"/>
                                    最高
                                </label>
                            </div>
                            <div className="form-check">
                                <label htmlFor="level2" className="form-check-label">
                                    <input type="radio" className="form-check-input" name="level" id="level2" value="2"/>
                                    中等
                                </label>
                            </div>
                            <div className="form-check">
                                <label htmlFor="level3" className="form-check-label">
                                    <input type="radio" className="form-check-input" name="level" id="level3" value="3" required/>
                                    普通
                                </label>
                            </div>
                        </fieldset>
                        <button className="btn btn-outline-secondary" type="submit">新增</button>
                    </form>
                </div>
            </div>
        );
    }
}

Creator.propTypes = {
    api: React.PropTypes.string.isRequired
};

