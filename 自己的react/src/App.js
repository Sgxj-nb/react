import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login from './components/cardList';
import Home from './components/Home';
import Two from './components/two';
import Alzj from './components/alzj';

// 利用class类定义组件
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/two" component={Two} />
        <Route path="/alzj" component={Alzj} />
      </Router>
    );
  }
}

export default App;
