const mongoose = require('mongoose');
const { Schema } = mongoose;

const allocatedPanelSchema = new Schema({
      student_group: {
        type: String,
        required: true,
        trim: true,
        unique:true
      },
      panel_member1: {
        type: String,
        required: true,
      },
      panel_member2: {
        type: String,
        required: true,
      }
    });

const AllocatedPanel = mongoose.model('Allocated_panels', allocatedPanelSchema);
module.exports = AllocatedPanel;