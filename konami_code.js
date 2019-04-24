const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  const body = document.body;
  let i = 0;
  function konamiSequence(event) {

    if (event.key === codes[i]) {
      if (i == codes.length - 1) {
        alert("Knoami Code!!!");
        i = 0
      } else {
        i++;
      }
    } else {
      i = 0;
    };
  };

  body.addEventListener('keydown', konamiSequence);
}
