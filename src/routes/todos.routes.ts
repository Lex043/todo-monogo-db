import express from 'express';
import {
    postTodo,
    getTodo,
    getTodos,
    deleteTodo,
    editTodo,
} from '../controllers/todo.controller';

const router = express();

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', postTodo);
router.patch('/:id', editTodo);
router.delete('/:id', deleteTodo);

export default router;
