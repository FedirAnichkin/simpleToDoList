import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class InputComponent extends Component {
    @service('todo-list') todo;

    @action
    onKeyDown({ target, key }) {
        let text = target.value.trim();
        let hasValue = Boolean(text);
    
        if (key === 'Enter' && hasValue) {
            this.todo.add(text);
    
        target.value = ''
    }
  }
}
