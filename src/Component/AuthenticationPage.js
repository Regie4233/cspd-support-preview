import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

function AuthenticationPage(props) {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [allowForms, setForms] = useState(false);
  //const [loginstatus, setLoginstatus] = useState('');

  Axios.defaults.withCredentials = true;


  const submitHandler = (e) => {
    e.preventDefault();

    Axios.post('https://mlmdb.herokuapp.com/api/login', {
      //Axios.post('http://localhost:3001/api/login', {
      fusername: username,
      fpassword: password
    }).then((resp) => {
      setForms(true);
      if (resp.data.message) {
        setForms(false);
        //setLoginstatus(resp.data.message);
        props.auth(resp.data.message);
      } else {
        //setLoginstatus(resp.data[0].username);
        props.auth(resp.data[0].username);
      }
    });
  };
  return (
    <>
      {/* {
        props.auth !== '' ? */}
      <>
        <div className='headerL check'>
          Missing List Manager
        </div>
        <div className='check'>
          <fieldset disabled={allowForms}>
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
          </fieldset>
        </div>
      </>
      {/* :
          null
      } */}

    </>
  );
}

export default AuthenticationPage;