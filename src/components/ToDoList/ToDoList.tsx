import ToDoListItem from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { Todo } from "../../models/todo-item";

export const ToDoList = (props: { todos: Todo[], deleteToDo: Function, updateToDo: Function }) => {
    
    // interface Human {
    //     name: string
    // }

    // interface Man extends Human {
    //     sex?: 'man'
    // }
    // interface Women extends Human {
    //     sex: 'women'
    // }

    // const human1: Man = {
    //     name: 'Mark'
    // }
    // const human2: Women = {
    //     name: 'Melisa',
    //     sex: 'women'
    // }

    // const todo1: Todo = {
    //     id: 0,
    //     text: 'Первая задача',
    //     isDone: false
    // }
    // const todo2: Todo = {
    //     id: 1,
    //     text: 'Вторая задача',
    //     isDone: true
    // }

    const checkedList = () => {
        return props.todos
            .filter((item) => item.isDone )
            .map((item, idx) => {
                return (
                    <ToDoListItem ToDoItem={item} key={idx} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                )
            })
    }
    const uncheckedList = () => {
        return props.todos
            .filter((item) => !item.isDone )
            .map((item, idx) => {
                return (
                    <ToDoListItem ToDoItem={item} key={idx} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
                )
            })
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {/* <ToDoListItem ToDoItem={todo1}/> */}
                { checkedList() }

            </ul>
            <ul className="todo-list completed">
                {/* <li className="todo-list-item__wrapper">
                    <span>Вторая задача</span>
                    <div className="todo-list-item__buttons">
                        <button className="btn-trash"></button>
                        <button className="btn-uncheck"></button>
                    </div>
                </li> */}
                {/* <ToDoListItem ToDoItem={todo2}/> */}
                {/* {
                    todos
                        .filter((item) => item.isDone )
                        .map((item, idx) => {
                            return (
                                <ToDoListItem ToDoItem={item} key={idx}/>
                            )
                        })
                } */}
                { uncheckedList() }


            </ul>
        </div>
    )
}