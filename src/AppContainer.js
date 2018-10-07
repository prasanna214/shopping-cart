import React from 'react';
import {Component} from 'react';
import App from './App';
import {connect} from 'react-redux';
import {add, remove} from "./actions";

class AppContainer extends Component{
    render(){
        return <App {...this.props}/>;
    }
}

const mapStateToProps = state => {
    return{
        products: state.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem : (productName, id) => {dispatch(add(productName, id))},
        removeItem : (product) => {dispatch(remove(product))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
