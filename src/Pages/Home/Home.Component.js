import React, { PureComponent } from 'react'
import "./Home.scss"
import store from "../../Components/Images/ecomerse.png"
export default class HomeComponent extends PureComponent {
  render() {
    return (
      <div className='home'>

          <div className='home-image'>
          <img className='home-image-img' alt='' src={store} width="100%" height={550} />
          </div>
      </div>
    )
  }
}
