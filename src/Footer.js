import React, {Component} from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaMailchimp } from 'react-icons/fa';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
       <h2>Följ oss på Instagram</h2>
     <p><a href="instagram.com"><FaInstagram /></a></p>
  
       <h2>Hitta hit</h2>
      <p> Stigbergsliden 5 B <br/>
      414 63 Göteborg</p>

      <p><a href="https://www.google.com/maps/place/G%C3%B6teborgs+Dramatiska+Teater/@57.699577,11.9346751,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff34612124d77:0x393a9bd59365cf52!8m2!3d57.699577!4d11.9368638">Visa på karta</a></p>
      <p><a href="mailto:someone@example.com">Kontakt</a></p>
      </div>
    )
  }
}

export default Footer