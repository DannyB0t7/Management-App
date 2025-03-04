import React from "react";

function Button({ children, styles, ...props }) {
  let cssClass = "flex gap-1 items-center ";
  return (
    <button className={cssClass + styles} {...props}>
      {children}
    </button>
  );
}

export default Button;
