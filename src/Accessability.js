import React, {Component} from 'react'
import { FaWheelchair, FaDeaf, FaBlind } from 'react-icons/fa';


class Accessability extends Component {
  render() {
    return (
      <div className="Accessability">
          <h2>Tillgänglighet</h2>
       <p>Vi strävar efter att ha en så god tillgänglighet som möjligt på GDT. 
         Här har vi samlat information om det som kan vara bra att veta när du kommer till oss. 
         Publikvärdarna finns på plats och kan hjälpa dig när du är här. 
         Om du har frågor som du inte får svar på här, hör av dig till biljettkassan på tel 031 010010 323.
</p>
       <FaWheelchair />
      <FaDeaf />
      <FaBlind />

      </div>
    )
  }
}

export default Accessability