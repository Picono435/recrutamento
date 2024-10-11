import {createHandler, Get, Query} from "next-api-decorators";
import {TodoService} from "@/lib/backend/services";

class AddHandler {

    @Get()
    add(@Query('text') text: string) {
        return TodoService.addTodo(text)
    }

}

export default createHandler(AddHandler);