import { observer } from 'mobx-react-lite';
import React from 'react';
import TodoStore from './store/Todo';

const ToDO = observer(() => {
    console.log('render');
    return (
        <div>
            <button onClick={() => TodoStore.fetchToDo()}>Fetch add</button>
            {TodoStore.todos.map(todo => 
                <div className='todo' key={todo.id}>
                    <input type='checkbox' checked={todo.complete} onChange={() => TodoStore.completeTodo(todo.id)} />
                    {todo.title}
                    <button onClick={() => TodoStore.removeTodo(todo.id)}>Delete</button>
                </div>)
            }
        </div>
    )
});

export default ToDO;