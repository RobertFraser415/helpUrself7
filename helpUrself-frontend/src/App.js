import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import routes from './routes'

// import  
// import {Provider} from 'react-redux'
// import store from './store'
// import { useEffect }  from 'react'
// import { loadUser } from '.actions/authActions'

function App() {
  return (
    <Router>
      {/* <Provider store = {store}> */}
        <div>
          <NavbarComponent />
          { routes }
        </div>
      {/* </Provider> */}
    </Router>
  )
}  
      
      export default App;

