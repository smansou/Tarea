import React, { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
            <div className="ui">
            <div className="ui active inverted dimmer">
              <div className="ui huge text loader">Loading</div>
            </div>
            <p></p>
          </div>
        );
    }
}

export default Spinner;