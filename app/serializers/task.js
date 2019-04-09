import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        payload = {tasks: payload}
        return this._super(store, primaryModelClass, payload, id, requestType);

    },

    //serialize(snapshot, options) {
    //    let json = this._super(snapshot, options);
    //   delete json.data.attributes.task;
    //    return json;
    //  }

    
   // serializeIntoHash: function(hash, type, record, options) {
    //    hash["task"] = this.serialize(record, options);
     // }
});
