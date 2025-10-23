import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import './assets/scss/normalize.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Todo } from './models/todo-item';

const todos: Todo[] = [
        {
            id: 0,
            text: 'Первое действие',
            isDone: false
        },
        {
            id: 1,
            text: 'Второе действие',
            isDone: true
        },
        {
            id: 2,
            text: 'Третье действие',
            isDone: false
        },
        {
            id: 3,
            text: 'Четвертое действие',
            isDone: false
        }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={todos} />}></Route>
        <Route path='/todo' element={<ToDoListPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);