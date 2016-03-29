var winston = require('winston');
var fs = require('fs');
var logDir = 'logs/';

if (!fs.existsSync(logDir)) {
    // Create the directory if it does not exist
    fs.mkdirSync(logDir);
}

    var logger = new(winston.Logger)({
        transports: [
            new(winston.transports.Console)({
                level: process.env.LOG_LEVEL || 'debug',
                colorize: process.env.LOG_COLOR === 'true' || true
            }),
            new(winston.transports.File)({
                level: process.env.LOG_LEVEL || 'debug',
                filename: logDir + 'output.log',
                handleExceptions: true,
                json: false,
                colorize: true
            })
        ]
    });

    logger.stream = {
        write: function(message, encoding) {
            logger.info(message);
        }
    };

    logger.debug('Logger set up successfully');
    module.exports = logger;
