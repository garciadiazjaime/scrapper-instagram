const { runETL } = require("../../support/etl");

exports.handler = async function (event, _context) {
  console.log('runETL', runETL)
  // await runETL();

  return {
    statusCode: 200,
  };
};
