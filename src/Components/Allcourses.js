import { Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import Course from './course';
import axios from 'axios';
import BASEURL from '../api/bootsapi';
import { toast } from 'react-toastify';
const AllCourses = () => {
     
    const getAllCourseFromServer = () => {
        axios.get(`${BASEURL}/courses`).then(
            (response) => {
               // console.log(response);
                setCourses(response.data);
                toast.success("Data loaded")
            

            },
            (error) => {
                console.log("error")
                toast.warning("You have a error ")
            }
        )
    };
    useEffect(() => {
        getAllCourseFromServer();
    },[])
    
    const [courses, setCourses] = useState([
        //  { title: "java course", description: "this is a java course" },
        // { title: "Python course", description: "this is a Python course" },
        //  { title: "Spring course", description: "this is a Spring course" }
    ])

    return (
      

        <div>

            {/* <Button onClick={() => {
            console.log("Test");
            setCourses([ ...courses,{ title: "New PHP Course", description: 'This is a new PHP course' }]);
        }}>Test</Button>
     */}
            

            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length > 0
                    ? courses.map((item) => <Course key = {item.id} course={item} />)
                    : "NO courses"
            }

        </div>
    )
};

export default AllCourses;