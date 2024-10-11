import {createHandler, Get, ParseNumberPipe, Query} from "next-api-decorators";
import {TodoService} from "@/lib/backend/services";

class AddHandler {

    @Get()
    fetchTodo(@Query('id', ParseNumberPipe) id: number) {
        return TodoService.getTodo(id)
    }

}

export default createHandler(AddHandler);