import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            productName: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }
  render() {
    return (
      <div className="App">
          <h1>Shopping-Cart</h1>

          <label>Enter Item :<input value={this.state.productName} onChange={this.handleInput}/>
          </label>
          <button onClick={() => {
              this.props.addItem(this.state.productName,
                  this.props.products.length + 1)
          }}>Add
          </button>

          <br/><br/>

          <table className="items">
                  <th> Product Id</th>
                  <th> Product Name</th>
                  <th> Action</th>
              {this.props.products && this.props.products.map(product =>
                  <tr>
                      <td> {product.id} </td>
                      <td> {product.name}</td>
                      <td><button onClick={() => {
                          this.props.removeItem(product)
                      }}>Remove
                      </button>
                      </td>
                  </tr>
              )}
          </table>

      </div>
    );
  }

    handleInput(event) {
        this.setState({productName: event.target.value});
    }
}

export default App;
