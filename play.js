/**
 * Establishes connection with the game server
 */

const connect = require("./client");
const conn = connect();
console.log("Connecting ...");
conn.on("connect", function () {
  console.log(`Connection Established`);
  conn.write("Name: KG");
});


// conn.setEncoding("utf8");