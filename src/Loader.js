import React from "react";

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
  Loader.defultProps = {
      message: "Loading..........."
    }
};
export default Loader
