import { makeAutoObservable } from "mobx";

class ToDo {
    todos = [
        //{id: 1, title: 'learning React', complete: false},
        //{id: 2, title: 'learning Next.js', complete: false},
        //{id: 3, title: 'learning Mobx', complete: false},
    ]

    constructor() {
        console.log('constructor');
        //deep - for глубокого отслеживания состояния
        //makeAutoObservable(this, {}, {deep: true});
        makeAutoObservable(this);
    };

    addTodo(todo) {
        console.log('addTodo');
        this.todos.push(todo);
    };

    removeTodo(id) {
        console.log('removeTodo');
        //filter - return new array withot id
        this.todos = this.todos.filter(todo => todo.id != id);
    };

    completeTodo(id) {
        console.log('completeTodo');
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, complete : !todo.complete} : todo);
    };

    fetchToDo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.todos = [...this.todos, ...json]
        })
    }
}

export default new ToDo();