import React from "react";
import "./Button.css";

interface Props {
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  className?: string;
  keyRef?: any;
}

export const Button: React.FC<Props> = React.memo((props) => {
  const { children, className, onClick, keyRef } = props;
  return (
    <button
      onClick={onClick}
      className={`Button ${className ? className : ""}`}
      ref={keyRef}
    >
      {children}
    </button>
  );
});
