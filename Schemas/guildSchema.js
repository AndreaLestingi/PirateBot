const mongoose = require('mongoose');
const { Schema } = mongoose;

const guildSchema = new Schema({
    guildId: {
        type: String,
        required: true
    },
    adminRole: {
        type: String
    }
});

module.exports = mongoose.model('Guild', guildSchema);