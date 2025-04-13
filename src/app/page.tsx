'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

export type NoteType = {
  title: string;
  content: string;
};
export default function Home() {

  const [notes, setNotes] = useState<NoteType[]>([]);
  function addNote(newNote:NoteType) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id:number) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index != id;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
  
}

