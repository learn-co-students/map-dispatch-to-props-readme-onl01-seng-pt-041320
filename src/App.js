import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = e => {this.props.addItem()}

  render() {
    // debugger
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

  const mapStateToProps = state => ({ items: state.items })
    
  const mapDispatchToProps = dispatch => ({ addItem: () => { dispatch(addItem())}})

export default connect(mapStateToProps, mapDispatchToProps)(App);