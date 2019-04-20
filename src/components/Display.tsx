import React from "react";

interface Props {
  value: string;
}

export const Display: React.FC<Props> = ({value}) => {
  return <div>Value: {value}</div>
}