import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
//export default DS.RESTAdapter.extend({
    host:'http://localhost:8080',//the spring tomcat host

  // host:'localhost:8000',//Apache host
    
});
