import Controller from '@ember/controller';
import {computed} from '@ember/object';
import { filterBy } from '@ember/object/computed';


export default Controller.extend({
    isDone: false,
    addToggleCondition: false,
    editMode: false,
    //isEditing: false,
    
    
   /* taskArraySize: function(){
        return this.store.findAll('task').length.toString;
    },

    tasksDone: function(){
      return filterBy('model', 'isDone');
    },
    */

  // taskArraySize: function(){
   //  return this.get('model.length')
   //},

  //taskArraySize: this.set('lenght', this.model.length),
    
    //taskArraySize: computed('this.model.[]', function(){
     //   return this.model.lengh;
   // }),

  // remaining: function(){
  //  return this.filterBy('isDone', false).get('length');
 // }.property('@each.isDone'),

    actions: {
        //taskArray = this.get('model').lenght,
        addToggle(){
          
          if(!this.addToggleCondition){
            this.set('addToggleCondition', true);
          }else{
            this.set('addToggleCondition', false);
          }

        },

        createTask() {
          // get the input value from the .hbs template
          let newTask = this.get('newTask')
          // create a record in Ember Data (locally, would not survive page refresh)
          let newRecord = this.store.createRecord('task', {
            title: newTask,
            isDone: false,//initialize to false
           
            
          })
          // Save the record to the API endpoint specified in adapters/application.js
          //let rec =this.store.get('task');
          newRecord.save()
          this.set('addToggleCondition', false);
          this.set('newTask', "");
        },
        
        /*
        updateTaskTitle(taskId) {
          let updatedTitle = this.get('updatedTitle')
          let task = this.get('task').findBy('id', taskId)//need to change to real number
          task.set('title', updatedTitle) // locally update the title
          task.save(); // save the title to API via PATCH
        },

        onEditMode(){
          this.set('editMode', true)
        },

         editTodo: function() {
        this.set('isEditing', true);
      },
        */
      
        startEditing(taskId) {
          
          //let updatedTitle = this.get('task.title');
          alert(taskId);
          let updatedTitle = this.model.get(task.title);
          alert(updatedTitle);
          this.store.findRecord('task', taskId, {backgroundReload: false})
          .then(function(task){
              task.set ('title', updatedTitle);
              task.save();
              
         })
        },

        toggleCompleted(taskId) {
           
           this.store.findRecord('task', taskId, {backgroundReload: false})
           .then(function(task){
             if(task.isDone){
               task.set ('isDone', false)
             }else{
              task.set ('isDone', true)
             }
               task.save();
               
          })
        },
          

        removeTask(taskId) {

               this.store.findRecord('task', taskId, {backgroundReload: false})
               .then(function(task){
                   task.destroyRecord();
               })
        },
/*
        overallTasks() {
            //let taskArray = this.get('model'),
            let taskArraySize = this.model.lenght;
            numberOfDoneTasks = this.model.filterBy('isDone', true).lenght;
            numberOfUnFinishedTasks = taskArraySize - numberOfDoneTasks;
          },
          */
       
      }
});
