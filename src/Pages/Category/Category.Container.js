import React, { PureComponent } from 'react';
import CateComp from './Category.Component';
export default class CategoryContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      select: "",
      categoryData: [],
      sortby: "",
    }
  };

  componentDidMount() {
    this.categorydataapi();
  };

  categorydataapi = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then((data) =>
        this.setState({ category: data })
      )
      .catch(err => {
        console.log(err)
      });
  };

  handleChange = (event) => {
    const select = event.target.innerHTML;
    this.setState({ select: select }, () => {
      this.apidata();
    });
   
  };

  apidata = () => {
    const { select } = this.state;
    fetch(`https://fakestoreapi.com/products/category/${select}`)
      .then(res => res.json())
      .then((data) =>
        this.setState({ categoryData: data })
      )
      .catch(err => {
        console.log(err)
      });
  };

  handleSortChange = (event) => {
    const sortby = event.target.value;
    this.setState({ sortby }, () => {
      this.sortData();
    });
  };

  sortData = () => {
    const { categoryData, sortby } = this.state;
    let sortedData = [...categoryData];

    switch (sortby) {
      case "pricelh":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "pricehl":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "titleaz":
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "titleza":
        sortedData.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    this.setState({ categoryData: sortedData });
  };


  render() {
    const { category, categoryData} = this.state;

 
    return (
      <div>
        <CateComp
                category={category}
                handleChange={this.handleChange}
                categoryData={categoryData}
                handleSortChange={this.handleSortChange}
              />
   
      </div>
    )
  }
}
