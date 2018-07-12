import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from "./NoteActions";
import { CREATE_NOTE, DELETE_NOTE } from "../Note/NoteActions";

const initialState = [];

export default function notes(state = initialState, action) {
	switch (action.type) {
		case CREATE_NOTE:
			return [...state, action.note];

		case UPDATE_NOTE:
			return state.map(note => {
				return note.id === action.id
					? { ...note, ...action.note }
					: note;
			});

		case DELETE_NOTE:
			return state.filter(note => note.id !== action.noteId);

		case CREATE_NOTE:
			return state.map(lane => {
				if (lane.id === action.laneId) {
					const notes = [...lane.notes, action.note.id];
					return { ...lane, notes };
				}
				return lane;
			});

		default:
			return state;
	}
}
