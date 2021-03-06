import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; import logo from './logo.svg';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch'
const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/articles' component={Articles} />
        <Route exact path='/articles/:id' component={Detail} />
        <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
)

export default App;
