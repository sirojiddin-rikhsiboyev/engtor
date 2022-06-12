import React from "react";

const Background = ({ url }) => {
  return (
    <div className="hidden lg:block">
      <div
        style={{
          backgroundImage: `url(${url})`,
        }}
        className="bg-blue-600 bg-cover bg-center bg-blend-hard-light h-full"
      ></div>
    </div>
  );
};

export default Background;
