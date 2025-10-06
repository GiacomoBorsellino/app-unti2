import * as winston from 'winston';

// const levels = { error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6 };

const logger: winston.Logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, label, message }) => {
            return `${timestamp} ${level.toUpperCase()} ${label || '-'}: ${message || '-'}`;
        })
    ),
    transports: [new winston.transports.Console()],
});

if (process.env.LOG_DIR) {
    logger.add(new winston.transports.File({ filename: process.env.LOG_DIR + 'error.log', level: 'error' }));
    logger.add(new winston.transports.File({ filename: process.env.LOG_DIR + 'info.log' }));
}

export { logger };
