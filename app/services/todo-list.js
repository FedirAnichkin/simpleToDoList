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

  get all() {
    return this.todo;
  }
 
  @action
  add(text) {
    let newTodo = new Todo(text);
 
    this.todo = [...this.todo, newTodo];
  }
}
