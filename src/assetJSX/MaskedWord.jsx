import React, { Fragment } from "react";

function MaskedWord(props) {
  const tabMask = [];

  for (let i = 0; i < props.mask.length; i++) {
    tabMask.push("*");
  }
  console.log(tabMask);

  return (
    <div>
      {tabMask.map((element, index) => {
        return <Fragment key={index}>{element}</Fragment>;
      })}
    </div>
  );
}

export default MaskedWord;
