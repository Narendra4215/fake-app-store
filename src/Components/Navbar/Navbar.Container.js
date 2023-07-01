import React, { PureComponent } from 'react';
import NavbarComponent from './Navbar.Component';
import { Link, Route, Routes } from 'react-router-dom';
import Category from "../../Pages/Category"

export default class NavbarContainer extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      categoryData:[],
      items:"",
    }
  }

  componentDidMount(){
    this.categorydataapi();
  };


  categorydataapi = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then((data) =>
        this.setState({categoryData: data })
      )
      .catch(err => {
        console.log(err)
      });
  };
handleItems=(event)=>{
console.log(event)
this.setState({items: event.target.innerHTML})
}

  render() {
    const{handleItems,items}=this.state;
    return (
      <div>

        <NavbarComponent categoryData={this.state.categoryData}
        handleItems={this.handleItems}
        />      
   <div>

<Routes>
  <Route path='/:items' element={<Category items={items}/>} />
</Routes>
</div>
      </div>
    )
  }
}
