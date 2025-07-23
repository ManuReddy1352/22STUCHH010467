const logger = require('./logger'); // Note: 'Logger' should be 'logger' if filename is lowercase

const loggingMiddleware = (stack, level, packageName) => {
    return (req, res, next) => {
        // CORRECTED: The entire string needs to be enclosed in backticks
        const message = `${req.method} ${req.originalUrl}`;
        logger({ stack, level, message, packageName });
        next();
    };
};

module.exports = loggingMiddleware;