import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const Menus = () => {

return (
    <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to = '/' action>
        Home
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a"  to = '/add-courses' action>
        Add Courses
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to = '/all-courses' action>
        View Courses
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a"  to='/' action>
        About Us
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a"  to = '/'action>
        Contact Us
        </Link>
        
</ListGroup>





)

};

export  default Menus;