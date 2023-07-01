import React, { PureComponent } from 'react';
import ProComp from './Products.Component';
import { useNavigate, useParams } from 'react-router-dom';

const Productrender = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params)
  return <ProCont navigate={navigate} params={params} {...props} />
}

 class ProCont extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
    };
  }
  componentDidMount() {
    this.fetchProductData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.fetchProductData();
    }
  }


  fetchProductData() {
    const { id } = this.props.params;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ productData: data })

      })
      .catch((error) => console.log(error))
  }



  render() {
    const { productData } = this.state;
    if(productData){

      <div>Loading.....</div>
    }
    return (
      <>
        <ProComp productData={productData} />

      </>
    )
  }
}
export default Productrender;