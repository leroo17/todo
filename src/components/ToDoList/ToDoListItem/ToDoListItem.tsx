import './ToDoListItem.scss';
import { Todo } from '../../../models/todo-item';

export default function ToDoListItem(props: {ToDoItem:Todo, updateToDo: Function, deleteToDo: Function}) {
    return (
        <li className="todo-list-item__wrapper">
            <span>{props.ToDoItem.text}</span>
            <div className="todo-list-item__buttons">
                <button className="btn-trash" onClick={()=> props.deleteToDo(props.ToDoItem)}></button>
                <button className={props.ToDoItem.isDone ? 'btn-check' : 'btn-uncheck'} onClick={()=> props.updateToDo(props.ToDoItem)}></button>
            </div>
        </li>
    )
}