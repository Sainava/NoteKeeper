'use client';
import React, { useState } from "react";
import { NoteType } from "../page";
import AddIcon from "@mui/icons-material/Add";


type CreateAreaProps = {
  onAdd: (note: NoteType) => void;
};

function CreateArea({ onAdd }: CreateAreaProps) {
  const [note, setNote] = useState<NoteType>({
    title: "",
    content: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event: React.FormEvent) {
    event.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={3}
        />
        <button type="submit"><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
