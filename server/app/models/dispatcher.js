let mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate'),
    
    Schema = mongoose.Schema;
let mongoosePages = require('mongoose-pages');
let autoIncrement = require('mongoose-id-autoincrement');


let dispatcher = new Schema({
    unique_id: Number,
    first_name: {type: String, default: ""},
    last_name: {type: String, default: ""},
    password:{type: String, default: ""},
    token:{type: String, default: ""},
    email: {type: String, default: ""},
    country_phone_code: {type: String, default: ""},
    phone: {type: String, default: ""},
    country: {type: String, default: ""},
    countryid:{ type: Schema.Types.ObjectId},
    city:{type: String, default: ""},
    cityid:{ type: Schema.Types.ObjectId},
    city_ids:[{type: Schema.Types.ObjectId, default : []}],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }

});
dispatcher.index({email: 1}, {background: true});
dispatcher.index({phone: 1}, {background: true});

dispatcher.plugin( mongoosePaginate );
dispatcher.plugin(autoIncrement.plugin, {model: 'dispatcher', field: 'unique_id', startAt: 1, incrementBy: 1});

mongoosePages.skip(dispatcher);

// set up a mongoose model and pass it using module.exports
module.exports =  mongoose.model('Dispatcher', dispatcher);

