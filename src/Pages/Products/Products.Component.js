import React, { PureComponent } from 'react'
import "./Product.scss";
import { Link } from 'react-router-dom';
export default class ProComp extends PureComponent {
  render() {
    const { productData } = this.props;

    return (
      <div>
        <div className='product-fixed'>
        <span className='name'>Fake App Store</span>
        <Link className='product-home' to="/">Home</Link>
        </div>
       

        <div className='product'>
          <div className='product-img'>
            <img alt='' className='product-img-img' src={productData.image} height={400} width={350} /> <br />
            <button className='product-cart'>Add to Cart</button>
            <button className='product-buy'>Buy Now</button>
          </div>
          <div className='product-details'>
            <li className='product-title'>{productData.title}</li>
            <div className='product-rating'>
              <li className='product-rate' >4.3
                -</li>
              <li className='product-count'>& (400) Ratings</li>
            </div>
            <li className='product-off'>Extra 20 OFF</li>
            <li className='product-price'>
              ₹{productData.price}
              <strike>₹200</strike>
              <span> 27% OFF</span>
            </li>
            <li className='product-cate'>{productData.category}</li>
          </div>
        </div>
      </div>

    )
  }
}
