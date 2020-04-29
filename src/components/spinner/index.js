import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/PulseLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="skew-loader">
        <ClipLoader
          css={override}
          size={10}
          color={"#540A08"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner;

