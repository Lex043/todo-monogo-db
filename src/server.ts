import { app } from './app';
import mongoose from 'mongoose';
import { logger } from './config/logger';
import { config } from './config/config';

const startServer = async () => {
    try {
        await mongoose.connect(config.mongo.url);
        logger.info('MongoDB connected');
        app.listen(config.server.port, () => {
            logger.info(
                `🚀 Server ready at: http://localhost:${config.server.port}`,
            );
        });
    } catch (error) {
        logger.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
