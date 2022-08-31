import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Viewer from './Component/Viewer';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import AuthenticationPage from './Component/AuthenticationPage';
import PrivateRoute from './Component/PrivateRoute';
import HomePage from './Component/HomePage';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavItem } from 'react-bootstrap';
import SelectedCaseContent from './Component/SelectedCaseContent';

function App() {
  const [loginstatus, setLoginstatus] = useState('');

  function authenticate(user) {
    setLoginstatus(user);
    console.log(user + ' ' + loginstatus);
  }
  const logOff = () => {
    Axios.post('https://mlmdb.herokuapp.com/api/logoff').then((resp) => {
      setLoginstatus('');
    });
  }




  return (
    <>
      <div>
        <div className='fixed-top'>

          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="https://regie4233.github.io/cspd-support-preview">Home</Nav.Link>
                <Nav.Link href="https://regie4233.github.io/cspd-support-preview/reporter">Reporter</Nav.Link>
                <Nav.Link href="https://regie4233.github.io/cspd-support-preview/viewer">Viewer</Nav.Link>
                {/* <Nav.Link href="http://localhost:3000">Home</Nav.Link>
                <Nav.Link href="http://localhost:3000/reporter">Reporter</Nav.Link> */}
                
                {/* <Nav.Link href="https://regie4233.github.io/cspd-support-preview/login">
                  {loginstatus === '' ? <p>You are not Logged In Click To Login</p> : <p> Logged as: {loginstatus}</p>}
                </Nav.Link> */}
                <NavItem className='justify-content-end'> {loginstatus === '' ? null : <button onClick={logOff}>LOG OFF</button>}</NavItem>
              </Nav>
            </Container>
          </Navbar>

        </div>

        <div> {/* show logoff button and name of user */}
          <Router basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path='/reporter'
                element={
                  <PrivateRoute status={loginstatus} auth={authenticate}>
                    <SelectedCaseContent />
                  </PrivateRoute>
                } />

              <Route path='/viewer'
                element={
                  <PrivateRoute status={loginstatus} auth={authenticate}>
                    <Viewer />
                  </PrivateRoute>
                } />

              {/* <Route path='/'
                element={
                  <PrivateRoute status={loginstatus} auth={authenticate}>
                    <HomePage />
                  </PrivateRoute>
                } /> */}
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<AuthenticationPage auth={authenticate} status={loginstatus} />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}
export default App;
