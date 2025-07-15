import express from 'express';
import todoRoutes from './routes/todos.routes';

const app = express();

// Middlewares
app.use(express.json());
app.use('/api/todos', todoRoutes);

// Basic health check route
app.get('/health', (_req, res) => {
    return res.status(200).json({ message: 'ok ' });
});

export { app };
