import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
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



// NEWSLETTER //
function Newsletter() {
//const [name, setName] = useState(""); //Here you can add a name input
const [email, setEmail] = useState('exempel@mail.se');

//Handle Change from input
const handleChange = e => {
  setEmail(e.target.value);
};
//Handle Submit from submit button
const handleSubmit = e => {
// Prevent site from reloading
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

//render Newsletter section

    return (
    
        <Form className="Newsletter">
            <h2>Vårt nyhetsbrev</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Vill du ha vårt tjusiga nyhetsbrev? Fyll i din mejladress nedan: </Form.Label>
          <Form.Control type="text" value={email} onChange={handleChange}/> 
          <Form.Text className="text-muted">
            Vi delar inte dina uppgifter till någon annan.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Jag godkänner att Göteborgs Dramatiska Teater sparar min mejl-adress för utskick av nyhetsbrev." />
        </Form.Group>
        <Button onClick={handleSubmit} variant="secondary" type="submit"> 
          Skicka
        </Button>
      </Form>
    )
  }

//https://www.youtube.com/watch?v=cxUoJV3lpkw (janne kemi visar)


//COOKIE - ska lyftas ut till egen modul
function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading> 🍪 Vi älskar kakor!</Alert.Heading>
        <p>
        Webbplatsen använder cookies för att hjälpa oss ge dig den absolut bästa upplevelsen när du besöker oss. Läs mer om vår cookie policy. Genom att stänga detta meddelande godkänner du vår användning av dessa cookies samt att du har informerats.
        </p>
      </Alert>
    );
  }
  return <Button variant="outline-danger" onClick={() => setShow(true)}>
  🍪</Button>;
}


 



//CAROUSEL- ska lyftas ut till egen modul
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
        <RenderCard />
        <RenderSecondCard />
        <RenderThirdCard />
        <RenderAbout />
        <Accessability />
        <Newsletter />
        <Footer />
        <AlertDismissibleExample />
     
        
       
      </div>
    )
  }
}

export default App