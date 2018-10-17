import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import MainLayout from './components/Main/Layout';
import BaseRouter from './routes';
import * as actions from './store/actions/auth';


// CSS imports
import 'antd/dist/antd.css';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();  
  }

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

const mapStateToProps = state => {
  console.log(!!state.token);
  return {
    isAuthenticated: state.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);