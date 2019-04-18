import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  isDone: false,
  addToggleCondition: false,
  editMode: false,
  doneTasks: filterBy('model', 'isDone', true),
  tasksTodo: filterBy('model', 'isDone', false),

  actions: {

    addToggle() {

      if (!this.addToggleCondition) {
        this.set('addToggleCondition', true);
      } else {
        this.set('addToggleCondition', false);
      }

    },

    createTask() {
      // get the input value from the .hbs template
      let newTask = this.get('newTask');
      // create a record in Ember Data (locally, would not survive page refresh)
      let newRecord = this.store.createRecord('task', {
        title: newTask,
        isDone: false,

      })
      // Save the record to the API endpoint specified in adapters/application.js
      newRecord.save()
      this.set('addToggleCondition', false);
      this.set('newTask', "");
    },

    onSave(taskId, newValue) {

      this.store.findRecord('task', taskId, { backgroundReload: false })
        .then(function (task) {
          task.set('title', newValue)
          task.save();
        })
    },

    toggleCompleted(taskId) {

      this.store.findRecord('task', taskId, { backgroundReload: false })
        .then(function (task) {
          if (task.isDone) {
            task.set('isDone', false)
          } else {
            task.set('isDone', true)
          }
          task.save();
        })
    },

    removeTask(taskId) {

      this.store.findRecord('task', taskId, { backgroundReload: false })
        .then(function (task) {
          task.destroyRecord();
        })
    },

  }
});


