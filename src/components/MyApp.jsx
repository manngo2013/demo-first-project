import React, { Component } from 'react';
import '../App.css';
import ProductListComponent from './ProductListComponent';
import AddProductForm from './AddProductForm';

export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      products: [
        {
          id: 1,
          name: 'Iphone 10 Pro Max',
          price: 1000,
          content: 'This is description or content of this product, .....',
        },
        {
          id: 2,
          name: 'Iphone 11 Pro Max',
          price: 1200,
          content: 'This is description or content of this product, .....',
        },
        {
          id: 3,
          name: 'Iphone 13 Pro Max',
          price: 1500,
          content: 'This is description or content of this product, .....',
        },
        {
          id: 4,
          name: 'Iphone 14 Pro Max',
          price: 2000,
          content: 'This is description or content of this product, .....',
        },
      ],
    };
  }

  handleShowHide() {
    this.setState({
      status: !this.state.status,
    });
  }

  addNewProduct = (product) => {
    this.setState({
      products: [...this.state.products, product],
    });
  };

  render() {
    /*let content;
    if (this.state.status === false) {
      content = (
        <div>
          <button onClick={() => this.handleShowHide()}>Show</button>
        </div>
      );
    } else {
      content = (
        <div>
          <button onClick={() => this.handleShowHide()}>Hide</button>
          <div>Show Content</div>
        </div>
      );
    }*/

    return (
      <div className="App">
        {/* <h1>Demo Conditional Rendering</h1>
        {this.state.status ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <div>
            <button onClick={() => this.handleShowHide()}>Hide</button>
            <div>Show Content</div>
          </div>
        )} */}

        <h1>Product Management</h1>
        {this.state.status ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Add New Product</button>
          </div>
        ) : (
          <div>
            <button onClick={() => this.handleShowHide()}>Hide</button>
            <AddProductForm addNewProduct={this.addNewProduct} />
          </div>
        )}
        <br />
        <ProductListComponent products={this.state.products} />
      </div>
    );
  }
}
