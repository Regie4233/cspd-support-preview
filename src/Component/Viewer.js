import 'bootstrap/dist/css/bootstrap.min.css';
import ViewTable from './ViewTable';

function Viewer() {

    
    return (
        <>
            <div className='mainForm'>
                    <ViewTable caseNum={1}/>
                    <ViewTable caseNum={2}/>
                    <ViewTable caseNum={3}/>
                    <ViewTable caseNum={4}/>
            </div>
        </>
    );
}
export default Viewer;
