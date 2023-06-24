import React, { PureComponent } from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import store from "../images/store app.jpg"
export default class HomeComp extends PureComponent {
  render() {
    return (
      <div>
        <div className='home'>
          <h3>FAKE APP STORE</h3>
          <div className='home-link'>
            <Link className='home-home' to="/">Home</Link>
            <Link className='home-category' to="/category">Category</Link>
          </div>
        </div>

        <img alt='' src={store} width="100%" height={550} />

        <footer>
          <div className='footer'>
            The Best Platform Of Fake App Store 
          </div>
        </footer>
      </div>
    )
  }
}
