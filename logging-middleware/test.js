const Log = require("./logger");

const testLog = async () => {
  const response = await Log(
    "frontend",
    "info",
    "component",
    "Navbar component loaded"
  );

  console.log(response);
};

testLog();