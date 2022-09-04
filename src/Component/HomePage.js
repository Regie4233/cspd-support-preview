import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
import PrivateRoute from './PrivateRoute';
import Axios from 'axios';


function HomePage() {

    const [loginstatus, setLoginstatus] = useState('');

    function authenticate(user) {
        setLoginstatus(user);
        console.log(user + ' ' + loginstatus);
    }

    function clearDB() {
        console.log('1');
        for (let i = 1; i > 4; i++) {
            console.log('starting.. ' + i);
            Axios.delete(`https://mlmdb.herokuapp.com/api/truncate/${i}`).then(() => { console.log('truncate successful') });
        }

    }
    return (

        <>
            <style>{'body {background-color: darkslategray;}'}</style>
            <div className='headerL'>
                <h1 style={{ color: 'papayawhip' }}> Welcome to CSPD Tray Tracker</h1>
            </div>

            <div >
                <PrivateRoute status={loginstatus} auth={authenticate}>
                    <ControlPanel clear={clearDB} status={loginstatus} />
                </PrivateRoute >

            </div>
        </>
    );
};

function ControlPanel(props) {

    return (
        <>
            <Container>
                <Card className='homepagecard' style={{ backgroundColor: 'linen' }}>
                    <Card.Header className=''>
                        {props.status === '' ? 'Please Login To Access Control Panel' : <h5>Control Panel</h5>}
                    </Card.Header>
                    <Card.Body>


                        <h6>WARNING: This will delete all of the entries from all the rooms and cases. Changes cannot be undone.</h6>
                        <Button variant='danger'>Clear List</Button>


                    </Card.Body>
                </Card>
            </Container>
        </>

    );
}

export default HomePage;

