import {Todo} from "../todo";

declare global {
    // allow global `var` declarations
    // eslint-disable-next-line no-var
    var todo: Todo;
}
