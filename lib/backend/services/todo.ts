import {prisma} from "@/lib/backend/services/db";

class Todo {

    async getAllTodos() {
        return prisma.todo.findMany()
    }

    async getTodo(id: number) {
        return prisma.todo.findUnique({
            where: {
                id
            }
        })
    }

    async addTodo(text: string = "") {
        return prisma.todo.create({
            data: {
                text
            }
        })
    }

    async editTodo(id: number, text: string) {
        const todo = await prisma.todo.update({
            where: {
                id,
            },
            data: {
                text,
            },
        })
        return todo
    }

    async deleteTodo(id: number) {
        return prisma.todo.delete({
            where: {
                id
            }
        })
    }
}

// Todo Service lifecycle management
const todo = global.todo || new Todo();
if (process.env.NODE_ENV !== "production") global.todo = todo;

export {Todo, todo as TodoService};
