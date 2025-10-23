import { Todo } from "../models/todo-item"
import { ListItem } from "../components/ListItem.tsx/ListIem"

export const HomePage = (props: {todos: Todo[]}) => {
    return (
        <>
            {
                props.todos.map((todo: Todo, idx: number) => {
                    return (<ListItem todo={todo} key={idx} />)
                })
            }
        </>
    )
}