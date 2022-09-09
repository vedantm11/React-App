import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from 'reactstrap';
import { useEffect } from 'react';
const Course = ({ course }) => {

    useEffect(() => {
    document.title = "Course"
    })
    return (
        <Card>
            <CardBody class ="text-center">
                <CardSubtitle >{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className = "text-center">
                    <Button color ="danger">Delete</Button>
                    <Button color = "warning">Update</Button>
                </Container>
            </CardBody>
        </Card>



    )

}
export default Course;