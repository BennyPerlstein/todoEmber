import Route from '@ember/routing/route';


export default Route.extend({
    model(){
      
      return this.store.findAll('task');   
    },

    //setupController(controller, model){
    //  this.controller.set('lenght', this.model.length);
    //}
});
