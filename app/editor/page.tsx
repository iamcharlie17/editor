"use client"

import { useState } from "react"
import { SerializedEditorState } from "lexical"

import { Editor } from "@/app/editor/components/blocks/editor-x/editor"

export const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
} as unknown as SerializedEditorState

export default function EditorPage() {
  const [editorState, setEditorState] = useState<SerializedEditorState>(initialValue)


  return (
    <>
      <Editor
        editorSerializedState={editorState}
        onSerializedChange={(value) => setEditorState(value)}
      />
       <button onClick={() => console.log(editorState)} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </>
  )
}
