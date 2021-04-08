/**
 * Establishes connection with the game server
 */

const connect = require("./client");
const conn = connect();
const handleUserInput = (key) => {
  console.log("no idea",key)
    if (key === '\u0003') {
        process.exit();
      }
}
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data',(key) => handleUserInput(key))
  return stdin;
};

console.log("Connecting ...");

conn.on("connect", function () {
  
  console.log(`Connection Established`);
  conn.write("Name: KG");
  setupInput(conn);
 
});

