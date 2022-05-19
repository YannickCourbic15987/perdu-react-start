import React from "react";
import MaskedWord from "./MaskedWord";

function TabPendu() {
  const word = [
    "souris",
    "smartphone",
    "clavier",
    "gpu",
    "cpu",
    "ram",
    "usb",
    "tu-as-perdu",
  ];

  const indexRandom = Math.ceil(Math.random() * word.length - 1);

  const wordRandom = word[indexRandom];

  return (
    <div>
      <MaskedWord mask={wordRandom} />
    </div>
  );
}

export default TabPendu;
