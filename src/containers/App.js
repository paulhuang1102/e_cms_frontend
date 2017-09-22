import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import Creator from '../components/Creator';
import Main from '../components/manager/Main';
import { getPosts, changePost } from '../actions/postAction';

const apiUrl = 'http://localhost:3000';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={props => <SignIn {...props} api={apiUrl}/>}/>
                    <Route path="/godMode" render={props => <Creator {...props} api={apiUrl}/>}/>
                    <Route path="/manager" render={props => <Main {...props} api={apiUrl} posts={this.props.posts} getPosts={this.props.getPosts} changePost={this.props.changePost}/>}/>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => (
    { posts: state.posts }
);


const mapDispatchToProps = dispatch => (
    {
        getPosts: (posts) => {
            dispatch(getPosts(posts));
        },
        changePost: (post) => {
            dispatch(changePost(post));
        }
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
