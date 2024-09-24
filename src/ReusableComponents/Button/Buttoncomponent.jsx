import React from "react";

function Buttoncomponent({
  width,
  height,
  backgroundColor,
  icon,
  onclickfn,
  name,
}) {
  return (
    <div className="flex justify-center mt-2 ">
      <button
        className="rounded-lg"
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}
        onClick={onclickfn}
      >
        {icon}
        <h2 className="text-2xl text-center">{name}</h2>
      </button>
    </div>
  );
}

export default Buttoncomponent;
