import React, { useState } from "react";
import Image from "./Image";
import ChatApp from "./ChatApp";

export default function ToggleMain() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {/* {toggle && <Image />} */}
      {toggle && <ChatApp />}
    </div>
  );
}
