import React, { Component } from 'react';
import {connect} from 'react-redux';
import {nameChannel, postChannel} from '../store';

export const NewChannelEntry = function(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input
            className="form-control"
            type="text"
            name="channelName"
            placeholder="Enter channel name" 
            value={props.newChannelEntry}
            onChange={props.handleChange}
      />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

// receives dispatch as an argument
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange: (event) => {
        dispatch(nameChannel(event.target.value))
    },
    handleSubmit: (event) => {
        event.preventDefault();
        const name = event.target.channelName.value;
        dispatch(postChannel({name}))
    }
  };
};

// receives state as an argument
const mapStateToProps = function (state) {
  return {
      newChannelEntry: state.newChannelEntry
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);