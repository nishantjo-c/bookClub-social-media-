import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Wrapper from './wrapper.js'
import Login from './pages/login.js'
import Register from './pages/register.js'



function App() {


  return (
  <Router>
 
    <Route exact path='/'>
      <Redirect to='/home' />
    </Route>
    <Route path='/home' exact component={Wrapper} />
    <Route path='/register' exact component={Register} />
    <Route path='/login' exact component={Login} />

  </Router>
  );
}

export default App;