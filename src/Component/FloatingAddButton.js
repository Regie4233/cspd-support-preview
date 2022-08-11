import React from 'react';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class FloatingAddButton extends React.Component {

    render() {
        return (
            <div className='fixed-bottom d-flex justify-content-end p-2 testing'>
                <Button variant="success" onClick={this.props.clickhandle} className='shadow-lg mb-5 rounded newButton'>
                    Add New
                </Button>
            </div>

        );
    }
}


export default FloatingAddButton;