import {createHandler, Get} from "next-api-decorators";
import {TodoService} from "@/lib/backend/services";

class AddHandler {

    @Get()
    fetchAll() {
        return TodoService.getAllTodos()
    }

}

export default createHandler(AddHandler);