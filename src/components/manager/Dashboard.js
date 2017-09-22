import React from 'react';
import PostItem from './PostItem';
import { connectApiAuth } from '../../services/connectApi';

export default class Dashboard extends React.Component {

    componentDidMount() {
        if (this.props.posts.posts.length > 0) {
            return;
        }
        connectApiAuth('GET', `${this.props.api}/manager/postAll`, {}, (res) => {
            this.props.getPosts(JSON.parse(res));
        });
    }

    render() {
        return (
            <ul className="post-list">
                <il className="post-list-title">
                    <div className="row no-gutters">
                        <div className="col-1">編號</div>
                        <div className="col-4">標題</div>
                        <div className="col-3">作者</div>
                        <div className="col-1">發佈</div>
                        <div className="col-3">修改日期</div>
                    </div>
                </il>
                { this.props.posts.posts.map(post => (<PostItem post={post} key={post.post_id} history={this.props.history} />)) }
            </ul>
        );
    }
}

