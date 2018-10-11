import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from './components/Layout';
import BaseRouter from './routes';

// CSS imports
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <MainLayout {...this.props}>
            <BaseRouter />
          </MainLayout>
        </Router>
      </div>
    );
  }
}

export default App;
