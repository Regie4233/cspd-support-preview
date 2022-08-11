import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TrayCards from './TrayCards';
import ListGroup from 'react-bootstrap/ListGroup';
class RoomCard extends React.Component {

    

    render() {
        //convert string roomnumber into an Int to identify what room this card belongs to
        function convert(newnum){
            if(newnum.length === 4){
            return parseInt(newnum.slice(-1));
            }
            return parseInt(newnum.slice(-2));
        }
        let intRoomNum = convert(this.props.roomNum);
        return (
            <Card>
                <Card.Header as="h5">{this.props.roomNum}</Card.Header>
                <Card.Body>
                    <ListGroup defaultActiveKey="#link1">
                        {/* {this.props.trayList.map(info => <TrayCards key={info.id} trayinfo={info} delhandler={this.props.delhandler} roomNumber={this.props.roomNum}/>)} */}
                        {this.props.trayList.map(info => <TrayCards key={info.id} trayinfo={info} buttonhandler={this.props.buttonhandler} roomNumber={intRoomNum}/>)}
                    </ListGroup>
                    <Button variant="danger" onClick={() => this.props.buttonhandler.deleteAll(intRoomNum)} className='dButton'>Erase All</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default RoomCard;