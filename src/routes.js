import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Article from './pages/article/article'
import GlobalFeed from './pages/globalFeed/globalFeed'
import Auth from './pages/auth/auth'
import TagFeed from './pages/tagFeed/tagFeed'
import YourFeed from './pages/YourFeed.js/yourFeed.js'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={GlobalFeed} exact/>
            <Route path='/feed' component={YourFeed}/>
            <Route path='/tags/:slug' component={TagFeed}/>
            <Route path='/login' component={Auth}/>
            <Route path='/register' component={Auth}/>
            <Route path='/articles/:slug' component={Article}/>
        </Switch>
    )
}

export default Routes;