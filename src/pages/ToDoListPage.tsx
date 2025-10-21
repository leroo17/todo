// import React from 'react';
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { Todo } from "../models/todo-item"
import { log } from "node:console";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export const ToDoListPage = () => {
        const [todos, setTodos] = useState<Todo[]>([
            {
                id: 0,
                text: 'Первая задача',
                isDone: false
            },
            {
                id: 1,
                text: 'Вторая задача',
                isDone: true
            },
            {
                id: 2,
                text: 'Третья задача',
                isDone: false
            }
        ])

    //     const todos: Todo[] = [

    //     {
    //         id: 0,
    //         text: 'Первая задача',
    //         isDone: false
    //     },
    //     {
    //         id: 1,
    //         text: 'Вторая задача',
    //         isDone: true
    //     },
    //     {
    //         id: 3,
    //         text: 'Третья задача',
    //         isDone: false
    //     }
    // ];
    const notify = (text: string) => toast(text);

    const createNewToDo = (text: string) => {
        console.log(text);
        const newTodo: Todo = {
            id: todos.length,
            text: text,
            isDone: false
        };
        notify(`Задача ${text} добавлена`);
        setTodos([...todos, newTodo]);
    }

    const updateToDo = (ToDoItem: Todo) => {
        console.log('update');
        console.log(ToDoItem);
        const newTodo = todos.map((todo) => {
            if(todo.id === ToDoItem.id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        })
        setTodos(newTodo);

        if(ToDoItem.isDone) {
            notify(`Задача ${ToDoItem.text} выполнена!`);
        } else {
            notify(`Задача ${ToDoItem.text} не выполнена`);
        }
        
    }
    const deleteToDo = (ToDoItem: Todo) => {
        console.log('delete');
        console.log(ToDoItem);
        const newTodo = todos.filter((todo) => todo.id !== ToDoItem.id);
        notify(`Задача ${ToDoItem.text} удалена`);
        setTodos(newTodo);
    }

    return (
        // <React.Fragment>
        //     <span>ToDo List Page</span>
        //     <span>ToDo List Page</span>
        // </React.Fragment>
        <>
            <Header />
            <Form createNewToDo={createNewToDo}/>
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
            <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}