//logger https://www.npmjs.com/package/winston
const winston = require("winston");
const format = winston.format;
const moment = require("moment");
const today = moment.utc().format("YYYY-MM-DD");
const options = 
{
    fileError: {
        level: 'error',
        filename: `./logs/${today}.error.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
        timestamp: true
    },
    fileCombined: {
        filename: `./logs/${today}.combined.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
        timestamp: true
    },
    console: {
        level: 'error',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};


const logger = winston.createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
        ),
    defaultMeta: { service: "user-service" },
    transports: [
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      new winston.transports.Console(options.console),
      new winston.transports.File(options.fileError),
      new winston.transports.File(options.fileCombined),
    ]
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function(message, encoding) {
      // use the 'info' log level so the output will be picked up by both transports (file and console)
      logger.info(message);
    },
};

module.exports = logger;