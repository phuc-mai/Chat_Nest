import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="input_send">
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src="/assets/attach.png" alt="attach file" />
        </label>
        <input type="file" id="image" style={{ display: "none" }} />
        <lable htmlFor="image">
          <img src="/assets/img.png" alt="send image" />
        </lable>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
