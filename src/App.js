import logo from './logo.svg';
import './App.css';
import Header from './Components/header.js'
import { Button } from 'reactstrap';
import AllCourses from './Components/Allcourses.js'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Course from './Components/course.js';
import AddCourse from './Components/AddCourses';
import { Col, Container, Row } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Menus from './Components/menu.js'
import Home from './Components/home.js'
function App() {
  return (
    
    <div>
      <Router>
      <ToastContainer />
      <Header/>
        <Container>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
          <Col md={8}>
            <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/add-courses' element={<AddCourse />} exact />
              <Route path='/all-courses' element={<AllCourses/>} exact />
            </Routes>
            </Col>
          </Row>


        </Container>
      </Router>
      </div>      
          
     
    
  )
}

export default App;
