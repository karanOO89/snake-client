const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", function (message) {
    console.log(`Recieved Packets:${message}`);
  });
  conn.on("data", function (message) {
    console.log(`Recieved Packets:${message}`);
  });
  return conn;
};

module.exports = connect;
