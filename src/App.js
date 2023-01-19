import React from 'react';
// import './styles/App.scss';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Contact from './pages/Contact/Contact';
import Explore from './pages/Explore/Explore';
import ProductPrice from './pages/ProductPrice/ProductPrice';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/ProductPrice/:id' component={ProductPrice} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
