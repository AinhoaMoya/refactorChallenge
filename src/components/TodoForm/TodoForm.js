import React, { Component } from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    var newItemValue = document.getElementById("itemName").value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      document.getElementById("todoForm").reset();
    }
  }
  render() {
    return (
      <form ref="form" id="todoForm" onSubmit={this.onSubmit} className="form-inline">
        <input
          autofocus
          type="text"
          id="itemName"
          className="form-control"
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
