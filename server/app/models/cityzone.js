let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let cityzoneSchema = new Schema({
    cityid: { type: Schema.Types.ObjectId },
    title:{type: String, default: ""},
    cityname: {type: String, default: ""},
    styleUrl: {type: String, default: ""},
    styleHash: {type: String, default: ""},
    description: {type: String, default: ""},
    stroke: {type: String, default: ""},
    stroke_opacity: {type: Number, default: 0},
    stroke_width: {type: Number, default: 0},
    fill: {type: String, default: ""},
    fill_opacity: {type: Number, default: 0},
    total_provider_in_zone_queue: [{ type: Schema.Types.ObjectId, default: [] }],
    kmlzone:{
     type: Array,
     index1: '3d'
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
cityzoneSchema.index({cityid: 1, title: 1}, {background: true});

let CityZone = mongoose.model('CityZone', cityzoneSchema);
module.exports = CityZone;

