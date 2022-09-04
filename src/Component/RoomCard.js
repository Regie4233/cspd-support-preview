import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TrayCards from './TrayCards';
import ListGroup from 'react-bootstrap/ListGroup';
class RoomCard extends React.Component {

    render() {
        //convert string roomnumber into an Int to identify what room this card belongs to. This is used by buttonHandlers from parent
        //for deleting, updating purposes.
        function convert(newnum){
            if(newnum.length === 4){
            return parseInt(newnum.slice(-1));
            }
            return parseInt(newnum.slice(-2));
        }
        let intRoomNum = this.props.roomNum !== 'Urgent Trays' ? convert(this.props.roomNum) : 'Urgent';
        return (
            <>
            { intRoomNum !== 'Urgent' ?
            <Card style={{backgroundColor:'#B0C4DE'}} className='roomcard'>
                <Card.Header as="h5" style={{backgroundColor:'lightgrey'}}>{this.props.roomNum}</Card.Header>
                <Card.Body>
                    <ListGroup defaultActiveKey="#link1">
                        {this.props.trayList.map(info => <TrayCards key={info.id} trayinfo={info} buttonhandler={this.props.buttonhandler} roomNumber={intRoomNum}/>)}
                    </ListGroup>
                    <Button variant="danger" onClick={() => this.props.buttonhandler.deleteAll(intRoomNum, false)} className='dButton'>Erase All</Button>
                </Card.Body>
            </Card>
            :
            <Card style={{backgroundColor:"salmon"}} className='roomcard'>
                <Card.Header as="h5" >{this.props.roomNum}</Card.Header>
                <Card.Body>
                    <ListGroup defaultActiveKey="#link1">
                        {this.props.trayList.map(info => <TrayCards key={info.id} trayinfo={info} buttonhandler={this.props.buttonhandler} roomNumber={intRoomNum}/>)}
                    </ListGroup>
                    <Button variant="danger" onClick={() => this.props.buttonhandler.deleteAll(intRoomNum, true)} className='dButton'>Erase All</Button>
                </Card.Body>
            </Card>
            }
            </>
        );
    }
}

export default RoomCard;