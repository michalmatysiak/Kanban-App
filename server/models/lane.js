import mongoose from 'mongoose';
import Note from '../models/note';
const Schema = mongoose.Schema;
mongoose.plugin(schema => { schema.options.usePushEach = true });

const laneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
  id: { type: 'String', required: true, unique: true },
});

function populateNotes(next) {
  this.populate('notes');
  next();
}

function deleteAllNotesInLine(next) {
	const notes = this.notes;
	notes.forEach(element => {
		Note.findByIdRemove(element._id, err => {
			if (err) throw err;
		});
	});
	next();
}

laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);
laneSchema.pre('remove', deleteAllNotesInLine);

export default mongoose.model('Lane', laneSchema);