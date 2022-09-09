
import { Button,Card,CardBody } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function header({ name, age,btColor}) {
    const showToastMessage = () => {
        toast.warning('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
        return (
            <div>
                <Card className="my-2 bg-success">
                    <CardBody>
                        <h1 className='text-center my-2'>Welcome to the course</h1>
                    </CardBody> 
                

                </Card>
                
            </div>
        )
    
}

export default header;