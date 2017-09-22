import React from 'react';

export default class PostItem extends React.Component {

    render() {
        return (
            <li className="post-item" onClick={this.edit.bind(this)}>
                <div className="row no-gutters">
                    <div className="col-1">#{this.props.post.post_id}</div>
                    <div className="col-4">{this.props.post.post_title}</div>
                    <div className="col-3">{this.props.post.creator}</div>
                    <div className="col-1">{this.props.post.show === 1 ? '是' : '否'}</div>
                    <div className="col-3">{this.props.post.updated_at}</div>
                </div>
            </li>
        );
    }
    edit() {
        this.props.history.push(`/manager/edit/${this.props.post.post_id}`);
    }
}
