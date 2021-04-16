import React from 'react'
import {Switch, Route} from 'react-router-dom'
// import Profile from './pages/Profile'
import Home from './components/pages/Home'
import GivesList from './components/pages/GivesList'
import GiveShow from './components/pages/GiveShow'
import GetsList from './components/pages/GetsList'
import GetShow from './components/pages/GetShow'
import UserShow from './components/pages/UserShow'
import CreateGet from './components/forms/CreateGet'
import CreateGive from './components/forms/CreateGive'
// import EditGet from './components/forms/EditGet'
// import EditGive from './components/forms/EditGive'
import AllUsersList from './components/pages/AllUsersList' 
export default (
  <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gives" component={GivesList} />
      <Route exact path="/gets" component={GetsList} />
      <Route exact path="/gets/create" component={CreateGet} />
      <Route exact path="/gives/create" component={CreateGive} />
      <Route exact path="/gives/:id" component={GiveShow} />
      <Route exact path="/gets/:id" component={GetShow} />
      <Route exact path="/users/:id" component={UserShow} />
      <Route exact path="/users" component={AllUsersList} />
      {/* <Route path="/gets/:categories" component={GetsCategoryPage} /> */}
      {/* <Route path="/gives/:categories" component={GivesCategoryPage} /> */}
      {/* <Route path="/gives/:categories" component={GivesCategoryPage} /> */}
      {/* <Route path="/edit/:id" component={EditGive} /> */}
      {/* <Route path="/edit/:id" component={EditGet} /> */}
      {/* <Route exact path="/signup" component={SignUpPage} /> */}
      {/* <Route exact path="/notauser" component={NotAUserPage} /> */}
      {/* <Route exact path="/profile" component={Profile} /> */}
    </Switch>)