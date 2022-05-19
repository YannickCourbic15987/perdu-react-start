import React from "react";
import ButtonKeyBoard from "../assetJSX/ButtonKeyBoard";
function Board() {
  const letters = "azertyuiopqsdfghjklmwxcvbn";
  const letter = letters.split("");

  return (
    <div>
      <ButtonKeyBoard alpha={letter} />
    </div>
  );
}

export default Board;
