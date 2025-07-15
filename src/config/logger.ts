import pino from 'pino';

export const logger = pino({
    level: 'debug',
    base: null,
    timestamp: false,
});
