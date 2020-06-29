import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class Todo {
    @tracked text = '';
    @tracked isCompleted = false;
   
    constructor(text) {
      this.text = text;
    }
  }

export default class TodoListService extends Service {
  @tracked todo = [];

  constructor(...args) {
    super(...args);

    this.todo = load();
  }

  get all() {
    return this.todo;
  }

  get incomplete() {
    return this.todo.filter(tod => {
      return tod.isCompleted === false;
    });
  }

  get completed() {
    return this.todo.filter(tod => tod.isCompleted);
  }

  get todoCountIsOne() {
    return this.incomplete.length === 1;
  }
 
  @action
  add(text) {
    let newTodo = new Todo(text);
 
    this.todo = [...this.todo, newTodo];

    this.persist();
  }

  @action
    clearCompleted() {
    this.todo = this.incomplete;

    this.persist();
  }

  @action
    toggleCompletion(tod) {
      tod.isCompleted = !tod.isCompleted;

      this.persist();
    }

  @action 
    persist() {
      persist(this.todo);
    }
}



/**************************
 * local storage helpers
 ***************************/

function load() {
  let lsValue = localStorage.getItem('todo');
  let array = (lsValue && JSON.parse(lsValue));

  let todo = deserializeTodoData(array);

  return todo;
}

function persist(todo) {
  let data = serializeTodo(todo);
  let result = JSON.stringify(data);

  localStorage.setItem('todo', result);

  return result;
}

function serializeTodo(todo) {
  return todo.map(tod => ({ text: tod.text, isCompleted: tod.isCompleted }));
}

function deserializeTodoData(todo) {
  return (todo || []).map(json => {
    let todo = new Todo(json.text);

    todo.isCompleted = json.isCompleted;

    return todo;
  });
}