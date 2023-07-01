import React, { PureComponent } from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import store from "../../Components/Images/ecomerse.png"
export default class HomeComp extends PureComponent {
  render() {
    return (
      <div className='home'>

          <div className='home-image'>
          <img className='home-image-img' alt='' src={store} width="100%" height={550} />
          </div>

        {/* <footer>
          <div className='footer'>
            The Best Platform Of Fake App Store 
          </div>
        </footer> */}
      </div>
    )
  }
}
