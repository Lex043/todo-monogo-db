import { Request, Response } from 'express';
import { Todo } from '../models/todo.model';
import { logger } from '../config/logger';

// get todos
export const getTodos = async (_req: Request, res: Response) => {
    try {
        const todo = await Todo.find();
        return res.status(200).json({
            message: 'Todos fetched successfully',
            data: todo,
        });
    } catch (error) {
        logger.error(error);
    }
};

// get a single todo by id
export const getTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: 'Id not found' });
        }
        res.status(200).json({
            message: 'Todo fetched successfully',
            data: todo,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// create todo
export const postTodo = async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        const todo = new Todo({ title });
        await todo.save();
        return res.status(201).json({
            message: 'Todo created successfully',
            data: todo,
        });
    } catch (error) {
        console.log(error);
        logger.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// delete todo
export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        return res.status(201).json({
            message: 'Todo deleted successfully',
            data: todo,
        });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// update todo
export const editTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;
        const todo = await Todo.findByIdAndUpdate(
            id,
            {
                title,
                completed,
            },
            { new: true, runValidators: true },
        );
        if (!todo) {
            return res
                .status(404)
                .json({ message: 'Todo not found' });
        }
        res.status(200).json({
            message: 'Todo updated successfully',
            data: todo,
        });
    } catch (error) {
        logger.error(error);
    }
};
