import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Main from './Main';
import Accessability from './Accessability';
import './index.css';
import RenderCard from './Card';
import RenderSecondCard from './SecondCard';
import RenderThirdCard from './ThirdCard';
import RenderAbout from './About';
import RenderNavbar from './Navbar';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';




function Newsletter() {
//const [name, setName] = useState(""); 
const [email, setEmail] = useState('exempel@mail.se');

const handleChange = e => {
  setEmail(e.target.value);
};

const handleSubmit = e => {

  e.preventDefault()

  const newUser = {
    email: email
  }
//fetch ("mongodb+srv://gdtUser:gdtUserPassword@cluster0.fjhzd.mongodb.net/users?retryWrites=true&w=majority", {
//fetch ("https://gdt-backend.herokuapp.com/users", {
  fetch("http://localhost:3000/users/new/123456", {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser)  
})
.then(res => res.json())
.then(data => {
  console.log(data)
})}



    return (
    
        <Form className="Newsletter">
            <h2>Vårt nyhetsbrev</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Vill du ha vårt tjusiga nyhetsbrev? Fyll i din mejladress här </Form.Label>
          <Form.Control type="text" value={email} onChange={handleChange}/> 
          <Form.Text className="text-muted">
            Vi delar inte dina uppgifter till någon annan.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Jag godkänner att GDT sparar min mejl-adress för utskick av nyhetsbrev." />
        </Form.Group>
        <Button onClick={handleSubmit} variant="secondary" type="submit"> 
          Submit
        </Button>
      </Form>
    )
  }

//https://www.youtube.com/watch?v=cxUoJV3lpkw (janne kemi visar)


//Cookie - ska lyftas ut till egen modul
function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Vi älskar kakor!</Alert.Heading>
        <p>
       Godkänn Cookies på sidan genom att kryssa ner den här rutan.
        </p>
      </Alert>
    );
  }
  return <Button variant="outline-danger" onClick={() => setShow(true)}>Om cookies</Button>;
}


 



//Carousel - ska lyftas ut till egen modul
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel id="nyheter" activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
    
        <img
          className="d-block w-100 h-50"
          src="blixtra.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
        <img
          className="d-block w-100 h-50"
          src="mittarbete.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img
          className="d-block w-100 h-50"
          src="stortorget1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
  



class App extends Component {
  render() {
    return (
      <div className="container">

        <RenderNavbar />
        <ControlledCarousel />
        <Main />
        <RenderCard />
        <Main />
        <RenderSecondCard />
        <Main />
        <RenderThirdCard />
        <Main />
        <RenderAbout />
        <Accessability />
        <Newsletter />
        <Main />
        <Footer />
        <AlertDismissibleExample />
     
        
       
      </div>
    )
  }
}

export default App