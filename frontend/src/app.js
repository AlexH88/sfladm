import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/store';

import Home from './components/containers/Home';
import Users from './components/containers/Users';
import About from './components/containers/About';
import Login from './components/containers/Login';
import Profile from './components/containers/Profile';
import UserItem from './components/containers/UserItem';
import Articles from './components/containers/Articles';
import ArticleItem from './components/containers/ArticleItem';

import Layout from './components/Layout';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            access: store.getState().auth.loggedIn
        }

        store.subscribe(() => {
                this.setState({
                access: store.getState().auth.loggedIn
            });

        });

    }

    render(){
        return(
            <Provider store={store}>
                {
                    (!this.state.access) ?
                    <Login /> :
                    <BrowserRouter>
                        <Layout>
                            <div>
                                <Route exact path='/' component={Home} />
                                <Route path='/users' component={Users} />
                                <Route path='/user/:id' component={UserItem} />
                                <Route path='/about' component={About} />
                                <Route path='/profile' component={Profile} />
                                <Route path='/articles' component={Articles} />
                                <Route path='/article/:id' component={ArticleItem} />
                            </div>
                        </Layout>
                    </BrowserRouter>
                }
            </Provider>
        )
    }
}

export default App;