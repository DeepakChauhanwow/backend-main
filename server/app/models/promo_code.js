let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let promocodeSchema = new Schema({
    promocode: {type: String, default: ""},
    code_value: {type: Number, default: 0},
    code_type:{type: Number, default: 0},
    code_uses: {type: Number, default: 0},
    user_used_promo: {type: Number, default: 0},
    state: {type: Number, default: 0},
    completed_trips_type: {type: Number, default: 0},
    completed_trips_value: {type: Number, default: 0},
    description: {type: String, default: ""},
    countryid: { type: Schema.Types.ObjectId},
    cityid: [{type: Schema.Types.ObjectId, default : []}],
    start_date: {
        type: Date,
        default: Date.now
    },
    code_expiry: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }

});
promocodeSchema.index({state: 1, start_date: 1, code_expiry: 1}, {background: true});
promocodeSchema.index({promocode: 1, code_expiry: 1}, {background: true});


let Promo_Code = mongoose.model('Promo_Code', promocodeSchema);
module.exports = Promo_Code;

