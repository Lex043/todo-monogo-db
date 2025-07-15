import mongoose, { Schema, Document } from 'mongoose';

export interface ITodoSchema extends Document {
    text: String;
    completed: Boolean;
}

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed: { type: Boolean, default: false },
});

export const Todo = mongoose.model<ITodoSchema>('Todo', TodoSchema);
