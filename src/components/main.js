import React from 'react'
import State from './state'
import {Route, Switch} from 'react-router-dom'
import District from './district'
import Country from './country'

const Main = () =>(<React.Fragment>
    <Route path="/" exact component={State} />
    <Switch>
    <Route path="/world" component={Country} />    
    <Route path="/state/:id" exact component={District} />
   </Switch>
</React.Fragment>
    
)

export default Main