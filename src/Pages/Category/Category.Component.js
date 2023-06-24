import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import "./Category.scss";

export default class CateComp extends PureComponent {
  render() {
    const { category, handleChange, categoryData, handleSortChange, } = this.props;
    return (
      <div>
        <div className='category'>
          {category.map((items, index) =>
            <div key={index} className='category-items'>
              <Link className='category-link' to={items.category} key={index} onClick={handleChange} >{items}</Link>
            </div>
          )}
        </div>
        <div className='category-sort'>
          <select onChange={handleSortChange} className='category-sort2'>
            <option>Sort by</option>
            <option value="pricehl">Price: High to Low</option>
            <option value="pricelh">Price: Low to High</option>
            <option value="titleaz">Title: A to Z</option>
            <option value="titleza">Title: Z to A</option>
          </select>
        </div>
        <div className='category-item' >
          {categoryData.map((item, index) => {
            return (
              <div key={index} className='category-one'>
                <ol key={index} >

                  <Link to={`/${item.id}/${item.title}`} className='category-link'>
                    <li><img src={item.image} height={100} width={130} alt='' /></li>
                    <li className='category-title'>{item.title}</li>
                    <li className='category-off'>Min 50% OFF</li>
                    <span className='category-rate'>
                      <li className='category-rate'>{item.rating.rate}</li>
                      <li className='category-count'>{item.rating.count}</li>
                    </span>
                    <li className='category-price'>Price:{item.price}/-</li>

                  </Link>

                </ol>
              </div>
            )
          })}
        </div>


      </div>
    )
  }
}
