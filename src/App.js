import React, {Component} from 'react'
import ReactDOM from 'react-dom';
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




//newsletter // se över onclick - handleclick!!!!!!!!! rad 39

function Newsletter() {
const [name, setName] = useState(""); 

    return (
        <Form className="Newsletter">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>  Vill du ha vårt byhetsbrev? Fyll i din mejladress här</Form.Label>
          <Form.Control type="email" placeholder="exempel@mejl.se" />
          <Form.Text className="text-muted">
            Vi delar inte dina uppgifter till någon annan.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Jag godkänner att GDT sparar min mejl-adress för utskick av nyhetsbrev." />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }

fetch("http://localhost:3000/users/new/123456", {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify()    //vad ska jag skicka in här?
})
.then(res => res.json())
.then(data => {
  console.log(data)
  
});

//https://www.youtube.com/watch?v=cxUoJV3lpkw (janne kemi visar)
//EN ONCLICK SUMBMIT TJOSAN

//Här ska in en funktion som sparar användare i databasen (?)))

//Cookie
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


 



//Carousel
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="Scum.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="Scum.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="Scum.jpg"
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