import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


function HomePage() {
    return (
        <>
            <div className='HeaderL'>
                <h2 className='mainForm trayLocation'>This page is under developement</h2>
                <h1 className='check'> Welcome to CSPD Tray Tracker</h1>
            </div>
            <div>
                <Card className='homepagecard'>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </div>
        </>
    );
};

export default HomePage;

