import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import BASEURL from '../api/bootsapi';
function AddCourse() {
    const [courses, setCourses] = useState({});

    const handleForm = (v) => {
        console.log("Posting "+courses);
        v.preventDefault();
        postDataToServer(courses)
    };
    const postDataToServer = (data) => {
        axios.post(`${BASEURL}/courses`, data).then(
            (response) => {
                console.log("DONE!!!");
            },
            (error) => { console.log("Error"); }
        )
    }
        return (
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="id">
                        ID
                    </Label>
                    <Input
                        id="id"
                        name="id"
                        placeholder="enter course id"
                        type="id"
                        onChange={(e) => {
                            setCourses({ ...courses, id: e.target.value })

                        }
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">
                        Course Title
                    </Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="enter course title"
                        type="text"
                        onChange={(e) => {
                            setCourses({ ...courses, title: e.target.value })

                        }
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">
                        Course Description
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="enter course description"
                        type="text"
                        onChange={(e) => {
                            setCourses({ ...courses, description: e.target.value })

                        }}
                    />
                </FormGroup>
                <Button color="success" type="submit">
                    Add Course
                </Button>
                <Button color="warning ml-3">
                    Clear
                </Button>
            </Form>
        )
    }
export default AddCourse;