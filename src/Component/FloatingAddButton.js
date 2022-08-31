import React from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HiOutlineViewGridAdd} from 'react-icons/hi';

class FloatingAddButton extends React.Component {

    render() {
        return (
            <div className='fixed-bottom d-flex justify-content-end p-2 testing'>
                <Button variant="outline-dark" onClick={this.props.clickhandle} className='shadow-lg mb-5 rounded-circle desktopButton'>
                    <HiOutlineViewGridAdd className='iconsize'/>
                </Button>
            </div>

        );
    }
}


export default FloatingAddButton;