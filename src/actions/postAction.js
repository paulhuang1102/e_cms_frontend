function getPosts(posts) {
    return {
        type: 'GET_POSTS',
        payload: posts
    };
}

function changePost(post) {
    return {
        type: 'CHANGE_POST',
        payload: post
    };
}

export { getPosts, changePost };
