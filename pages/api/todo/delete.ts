import {BadRequestException, createHandler, Get, ParseNumberPipe, Query} from "next-api-decorators";
import {TodoService} from "@/lib/backend/services";

class AddHandler {

    @Get()
    delete(@Query('id', ParseNumberPipe) id: number) {
        return TodoService.deleteTodo(id)
    }

}

export default createHandler(AddHandler);