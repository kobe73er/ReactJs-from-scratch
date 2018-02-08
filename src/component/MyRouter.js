/**
 * Created by dengpengfei on 08/02/2018.
 */
import React, {Component} from 'react'
import App from '../App'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ChildPage from './ChildPage'


export default class MyRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to={'/'}>App</Link></li>
                        <li><Link to={'/ChildPage'}>ChildPage</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path='/' component={App}/>
                        <Route exact path='/ChildPage' component={ChildPage}/>

                    </Switch>
                </div>
            </Router>
        )
    }
}