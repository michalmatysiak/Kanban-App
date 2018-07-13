import { connect } from "react-redux";
import Lane from "./Lane";
import { deleteLane, updateLane, editLane } from "./LaneActions";
import { createNoteRequest, createNote } from "../Note/NoteActions";
import { createLaneRequest, fetchLanes } from "../Lane/LaneActions";

const mapStateToProps = (state, ownProps) => ({
	laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
	editLane,
	deleteLane,
	updateLane,
	addNote: createNoteRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);

