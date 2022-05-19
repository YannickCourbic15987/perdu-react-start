import React from "react";
import Checkletter from "./Checkletter";

function ButtonKeyBoard(props) {
  console.log(props.alpha);
  let tabbtnContains = []
  const currentBtn = (e) => {
    e.preventDefault();
    e.currentTarget.disabled = true;

  };



  return (
    <div>
      {
        props.alpha.map((element, index) => {
          return (

            <button
              key={index}
              onClick={(e) => {
                currentBtn(e);
                let btn = e.currentTarget.textContent
                tabbtnContains.push(btn)
                console.log("tab de lettre btn ")
                console.log(tabbtnContains)
                tabbtnContains = []



              }}
            >

              {element}
            </button>
          );
        })
      }

      <Checkletter btn={tabbtnContains} />
    </div>
  );
}

export default ButtonKeyBoard;
