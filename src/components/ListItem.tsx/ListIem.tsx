import { Todo } from "../../models/todo-item"

export const ListItem = (props: {todo: Todo}) => {
    return (
        <>
            <a href={`/list/${props.todo.id}`}>{props.todo.text}</a>
        </>
    )
}