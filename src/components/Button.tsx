import React from "react";
import "./Button.css";

interface Props {
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export const Button: React.FC<Props> = (props) => {
  const {onClick, children} = props; 
  return <button className="Button" onClick={onClick} >{children}</button>;
}