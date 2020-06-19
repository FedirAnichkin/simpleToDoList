import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';

export default class TodoAppComponent extends Component {
    @tracked
    text = "";

    @action
    submit(model, event) {
        event.preventDefault();
        const i = model.length === 0 ? 1 : model[model.length - 1].id + 1;
        const newTodo = {
            id: i,
            todo: this.text
        };
        model.pushObject(newTodo);
        //console.log("add", model);
    }

    @action
    onChange(e) {
        this.text = e.target.value;
    }

    @action
    delete(model, item) {
        const index = model
        .map((file, index) => {
            if (file.id === item.id) {
            set(item, "id", null);
            set(item, "todo", null);
            return index;
            }
        })
        .filter(id => id !== undefined);
        model.splice(index[0], 1);
  }
}
