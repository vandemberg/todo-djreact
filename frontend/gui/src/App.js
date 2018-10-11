import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './components/Layout';
import BaseRouter from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout {...this.props}>
            <BaseRouter />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
