import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { connectApiAuth } from '../../services/connectApi';

export default class Edit extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            editorState: EditorState.createEmpty(),
            show: '',
        };
    }

    componentWillMount() {
        if (this.props.match.params.id) {
            const post = this.props.posts.posts.find(item => item.post_id === Number(this.props.match.params.id));
            if (post === undefined) {
                this.props.history.push('/manager/dashboard');
                return;
            }
            this.setState({ title: post.post_title, show: post.show });
            connectApiAuth('Get', `${this.props.api}/manager/getPostData/${this.props.match.params.id}`, {}, (data) => {
                console.log(data);
                const content = JSON.parse(data);
                this.setState({ content });
            });
        }
    }

    render() {
        return (
            <div className="row no-gutters justify-content-center">
                <form className="col-10" onSubmit={this.saveEdit.bind(this)}>
                    <div className="form-group row">
                        <input type="text"
                               id="title"
                               placeholder="標題"
                               name="title"
                               className="form-control mb-3"
                               value={this.state.title}
                               onChange={this.handleChange.bind(this)}/>
                        <Editor
                            initialEditorState={this.state.editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={this.onEditorStateChange.bind(this)}
                        />
                    </div>
                    <p>是否發佈?</p>
                    <select name="show" id="show" value={this.state.show} onChange={this.handleChange.bind(this)}>
                        <option value="1">是</option>
                        <option value="0">否</option>
                    </select>
                    <hr/>
                    <button className="btn btn-success" type="submit">儲存內容</button>
                </form>
            </div>
        );
    }

    saveEdit(e) {
        e.preventDefault();
        const title = this.state.title;
        const content = this.state.content;
        const show = this.state.show;
        const username = JSON.parse(window.localStorage.getItem('currentUser')).username;

        connectApiAuth('POST', `${this.props.api}/manager/saveEdit`, JSON.stringify({
            title,
            content,
            username,
            show
        }), (message) => {
            console.log(message);
            if (message === 'invalid token...') {
                alert('要登入齁');
                window.localStorage.removeItem('currentUser');
                this.props.history.push('/');
            }

            if (message === 'add successfully') {
                this.props.getPosts([]);
                this.props.history.push('/manager/dashboard');
            }
        });
        console.log(title, content, show);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState,
        });
    }
}
