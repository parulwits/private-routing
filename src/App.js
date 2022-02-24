import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<PublicRoute restricted={false} component={Home} />}
          />
          <Route
            path="/signin"
            exact
            element={<PublicRoute restricted={true} component={SignIn} />}
          />
          <Route
          path="/dashboard"
          exact
          element={<PrivateRoute component={Dashboard} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
