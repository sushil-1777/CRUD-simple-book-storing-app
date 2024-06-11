import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        className="animate-spin  h-10 w-10 rounded-full m-auto"
        src="/loading.png"
        alt=""
      />
    </div>
  );
};

export default Spinner;
