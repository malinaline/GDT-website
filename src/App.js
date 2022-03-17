import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Main from './Main';
import './index.css';
import Trailer from './Trailer';
import RenderCard from './Card';
import RenderNavbar from './Navbar';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { Button } from 'bootstrap';
import Newsletter from './Newsletter';


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
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}





class App extends Component {
  render() {
    return (
      <div className="container">
             <AlertDismissibleExample />
        <RenderNavbar />
        <Main />
        <Main />
        <Trailer />
        <RenderCard />
        <Main />
        <Main />
        <Newsletter />
        <Footer />
   
        
      </div>
    )
  }
}

export default App