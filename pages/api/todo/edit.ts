import {BadRequestException, createHandler, Get, ParseNumberPipe, Query} from "next-api-decorators";
import {TodoService} from "@/lib/backend/services";

class EditHandler {

    @Get()
    edit(@Query('id', ParseNumberPipe) id: number, @Query('text') text: string) {
        if (!text) {
            throw new BadRequestException("text is a required parameter.")
        }

        return TodoService.editTodo(id, text)
    }

}

export default createHandler(EditHandler);