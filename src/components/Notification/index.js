import React, { Component } from "react";
import { MDBNotification } from "mdbreact";

class Notification extends Component {

  render() {
    return (
      <MDBNotification
        show
        fade
        icon="bell"
        iconClassName="text-primary"
        title="Inside Mpas"
        message={this.props.messageText}
        style={{
            width:"500px",
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 9999
          }}
      />
    );
  }
}

export default Notification;