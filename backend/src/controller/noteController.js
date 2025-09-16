import Note from "../model/Note.js"

export async function getAllNotes (req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({message: "Internal server error !"})
        
    }
}

export async function createNote (req, res) {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json({message: "Notes created successfully !", savedNote})
    } catch (error) {
        console.log("Error while creating a new note:", error);
        res.status(500).json({message: "Internal server error !"})
    }
}

export function updateNote (req, res) {
    res.status(200).json({message: "Notes updated successfully !"})
}

export function deleteNote (req, res) {
    res.status(200).json({message: "Notes deleted successfully !"})
}