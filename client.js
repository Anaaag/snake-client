const net = require("net");

const connect = function (data) {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.on("connect", () => {
    console.log("Connected to server")
  });

  conn.on("data", (data) => {
    console.log("Server says", data)
  });


  conn.on("connect", () => {
    conn.write("Name: Ana");
  });

  conn.on()




  conn.setEncoding("utf8");



  return conn;
};


module.exports = {connect}