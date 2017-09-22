function connectApiAuth(method, path, data, callback) {
    const user = JSON.parse(window.localStorage.getItem('currentUser'));
    const xhr = new XMLHttpRequest();
    xhr.open(method, path);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${user.token}`);
    xhr.send(data);
    xhr.onload = () => {
        const res = xhr.responseText;
        callback(res);
    };
}

function connectApi(method, path, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, path);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
    xhr.onload = () => {
        const res = xhr.responseText;
        callback(res);
    };
}

export { connectApi, connectApiAuth };
