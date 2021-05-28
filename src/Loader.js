import React from "react";

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
  // When we not add message props then byDefault set
  Loader.defultProps = {
    message: "Loading...........",
  };
};
export default Loader;