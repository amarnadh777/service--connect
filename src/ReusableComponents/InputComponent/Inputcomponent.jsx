import React from "react";

function Inputcomponent({
  content,
  ispassword,
  width,
  height,
  backgroundColor,
  icon,
}) {
  return (
    <div className="flex justify-center mt-2 ">
      <div className="icon relative left-12 top-3 ">{icon}</div>

      <input
        className="pl-14 rounded-xl outline-none border-none"
        type={ispassword ? `password` : "text"}
        placeholder={content}
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}
      />
    </div>
  );
}

export default Inputcomponent;
