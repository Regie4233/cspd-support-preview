import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

function AuthenticationPage(props) {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  //const [loginstatus, setLoginstatus] = useState('');
   
  Axios.defaults.withCredentials = true;
  

  const submitHandler = (e) => {
    e.preventDefault();
    
    Axios.post('https://mlmdb.herokuapp.com/api/login', {
      //Axios.post('http://localhost:3001/api/login', {
      fusername: username,
      fpassword: password
    }).then((resp) => {
      
      if (resp.data.message) {
        //setLoginstatus(resp.data.message);
        props.auth(resp.data.message);
      } else {
        //setLoginstatus(resp.data[0].username);
        props.auth(resp.data[0].username);
      }
    });
  };

  // const logOff = () => {
  //   Axios.post('http://localhost:3001/api/logoff').then((resp) => {
  //     //setLoginstatus('');
  //     props.auth('');
  //     console.log(resp);
  //   });
  // }

  // useEffect(() => {
  //   Axios.get('https://mlmdb.herokuapp.com/api/loginstatus').then((response) => {
  //     if (response.data.loggedIn) {
        
  //       console.log(response.data);
  //     }
  //   });
  // }, []);
  return (
    <>
      {/* {
        props.auth !== '' ? */}
          <>
          <div className='headerL check'>
          Missing List Manager
          </div>
          <div className='check'>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Enter Username</Form.Label>
                <Form.Control placeholder="Username" onChange={(event) => setusername(event.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event) => setpassword(event.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>
          </>
          {/* :
          null
      } */}
      
    </>
  );
}

export default AuthenticationPage;