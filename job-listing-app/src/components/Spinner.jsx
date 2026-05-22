import React from "react";
import { ClipLoader } from "react-spinners";

const overide = {
  display: "block",
  margin: "100px auto",
  borderColor: "#363636",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#363636"
      loading={loading}
      cssOverride={overide}
      size={150}
    />
  );
};

export default Spinner;
