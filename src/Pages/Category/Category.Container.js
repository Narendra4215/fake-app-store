import React, { PureComponent } from 'react';
import CateComp from './Category.Component';
export default class CategoryContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      select: "",
      categoryData: [],
      sortby: "",
    }
  };
  componentDidMount() {
    this.apidata();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      this.apidata();
    }
  }
  apidata = () => {
    const{items}=this.props;
    console.log(items)
    fetch(`https://fakestoreapi.com/products/category/${items}`)
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
  handleitem=(event)=>{
console.log(event.id)
  }

  render() {
    const { categoryData,} = this.state;

    const{items}=this.props;
    console.log(items)
     
    return (
      <div>
        <CateComp
                categoryData={categoryData}
                handleSortChange={this.handleSortChange}
                handleitem={this.handleitem}
              />
   
      </div>
    )
  }
}
