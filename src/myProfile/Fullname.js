
import React from "react";

function Fullname(props) {
  return (
    <>
    <h2 style={{color:'red'}}>Name: {props.name}    </h2>
    <h2>age: {props.age}    </h2>
</>
  );
}

export default Fullname;
