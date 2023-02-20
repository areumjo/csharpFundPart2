// import { Terminal } from "./node_modules/xterm";
// const Terminal = require("xterm");
// var term = new Terminal();
var term = new window.Terminal({
  cursorBlink: true,
});
term.open(document.getElementById("xterm-container"));
term.write("from terminal.js module from \x1B[1;3;31mxterm.js\x1B[0m $ ");

function init() {
  term.prompt = () => {
    term.write("from terminal.js module from \x1B[1;3;31mxterm.js\x1B[0m $ ");
  };

  prompt(term);
}

// init();
/*
var term = new window.Terminal({
    cursorBlink: true
});
*/
