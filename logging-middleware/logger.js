const axios = require("axios");
const config = require("./config");

const Log = async (stack, level, packageName, message) => {
  try {
    const response = await axios.post(
      config.BASE_URL,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${config.TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    return {
      error: "Logging failed",
    };
  }
};

module.exports = Log;