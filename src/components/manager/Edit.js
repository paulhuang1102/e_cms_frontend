import React from 'react';

export default class Editor extends React.Component {
    render() {
        return (
            <div className="row no-gutters justify-content-center">
                <form className="col-10" onSubmit={this.saveEdit.bind(this)}>
                    <div className="form-group row">
                        <input type="text" className="form-control mb-3" id="title" name="title" placeholder="標題" />
                        <textarea name="content" id="content" cols="100" rows="30"/>
                    </div>
                    <button className="btn btn-success" type="submit">儲存內容</button>
                </form>
            </div>
        );
    }

    saveEdit(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const username = JSON.parse(window.localStorage.getItem('currentUser')).username;
        this.postApi('/manager/saveEdit', JSON.stringify({ title, content, username }), (message) => {
            if (message === 'invalid token...') {
                alert('要登入齁');
                window.localStorage.removeItem('currentUser');
                this.props.history.push('/');
            }
        });
    }

    postApi(path, data, callback) {
        const user = JSON.parse(window.localStorage.getItem('currentUser'));
        const xhr = new XMLHttpRequest();
        xhr.open('POST', this.props.api + path);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${user.token}`);
        xhr.send(data);
        xhr.onload = function () {
            console.log();
            callback(xhr.responseText);
        };
    }
}
