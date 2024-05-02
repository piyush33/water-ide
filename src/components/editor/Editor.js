import { useRef, useState } from "react";
import "./Editor.css";
import CodeEditor from "@monaco-editor/react";
import Output from "../output/Output";


const Editor = () =>{

    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco){
          editorRef.current = editor
    }
  
    return(
        <>
        <div className="container">
          <div className="editorContainer">
            <button className="title">JS Editor</button>
            <div style={{margin:"0px 0px 0px 10px"}}>
              <CodeEditor
                height="94vh"
                width="100%"
                theme="vs-dark"
                onMount={handleEditorDidMount}
                defaultLanguage="javascript"
              />
            </div>
          </div>
          <Output editorRef={editorRef}  />
        </div>
        </>
    )
}

export default Editor;