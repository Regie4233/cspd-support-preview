import react from 'react';

class ViewEntry extends react.Component {

    state = {color: this.props.selectedColor};


    render() {
        
        return (
            <>
                {this.props.caseNum === 'Urgent' ?
                    <tr className='urgentAlert' onClick={() => this.props.canvascontroller.OffCanvasShow(this.props.room.roomnum, this.props.room.id, this.props.isUrgent)}>
                        <td>OR {this.props.room.roomnum} URGENT TRAY</td>
                        <td className='traycard'>{this.props.room.trayname}</td>
                        <td>{this.props.room.currentLocation}</td>
                        <td>{this.props.room.casecartnum}</td>
                        <td>- -</td>
                    </tr>

                    :
                    <tr onClick={() =>this.props.canvascontroller.OffCanvasShow(this.props.room.roomnum, this.props.room.id, this.props.isUrgent)} style={{backgroundColor: this.state.color}}>
                        <td>OR {this.props.room.roomnum}{`-${this.props.caseNum}`}</td>
                        <td className='traycard'>{this.props.room.trayname}</td>
                        <td>{this.props.room.currentLocation}</td>
                        <td>{this.props.room.casecartnum}</td>
                        <td>{this.props.room.notes}</td>
                    </tr>


                }
                
            </>
        );
    }
}

export default ViewEntry;