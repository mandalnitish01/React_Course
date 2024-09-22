import React, { useState } from "react";
import ChildA from "../ChildA";
const ParentComponent = ({ firstname }) => {
  const [name, setName] = useState("nitish kumar");
  return (
    <div>
      <h1>prop dreeling </h1>
      <ChildA firstname={name} />
    </div>
  );
};

export default ParentComponent;
