import React, { Component } from 'react';

export default class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      content: '',
    };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangePrice = (event) => {
    this.setState({
      price: event.target.value,
    });
  };

  handleChangeContent = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  handleAddProduct(event) {
    event.preventDefault();

    // Check validate
    if (!this.state.name || !this.state.price || !this.state.content) {
      alert('Fields must required');
      return;
    }

    this.props.addNewProduct({
      id: Math.floor(Math.random() * 100),
      name: this.state.name,
      price: this.state.price,
      content: this.state.content,
    });

    this.setState({
      name: '',
      price: '',
      content: '',
    });
  }

  render() {
    return (
      <div>
        <form>
          <table>
            <tbody>
              <tr>
                <td>Name: </td>
                <td>
                  <input type="text" value={this.state.name} onChange={(event) => this.handleChangeName(event)} />
                </td>
              </tr>
              <tr>
                <td>Price: </td>
                <td>
                  <input type="number" value={this.state.price} onChange={(event) => this.handleChangePrice(event)} />
                </td>
              </tr>
              <tr>
                <td>Content: </td>
                <td>
                  <input type="text" value={this.state.content} onChange={(event) => this.handleChangeContent(event)} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="Add Product" onClick={(event) => this.handleAddProduct(event)} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
