import React from "react";

function ButtonKeyBoard(props) {
  console.log(props.alpha);

  const currentBtn = (e) => {
    e.preventDefault();
    // btnValue = e.currentTarget.textContent
    e.currentTarget.disabled = true;
  };
  return (
    <div>
      {props.alpha.map((element, index) => {
        return (
          <button
            key={index}
            onClick={(e) => {
              currentBtn(e);
            }}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonKeyBoard;
