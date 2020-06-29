import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CompletedRoute extends Route {
    @service('todo-list') todo;

    model() {
        let todo = this.todo;

        return {
            get completedTodo() {
                return todo.completed;
            }
        }
    }
}
