// setup interface to handle user input from stdin
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
  connection.write("Move: up")
}

  if (key === 'a') {
  connection.write("Move: left")
}

  if (key === 's') {
 connection.write("Say: hey")
}

  if (key === 'd') {
  connection.write("Move: right")
}

  connection.write("Say:  Hey there")
}


module.exports = { setupInput};

