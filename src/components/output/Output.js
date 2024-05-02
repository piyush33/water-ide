import { useState } from "react";
import { executeCode } from "../api/Api";
import "./Output.css"


const Output = ({editorRef}) => {

  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async() =>{
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(sourceCode);
      setOutput(result.output.split("\n"));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    }

    return (
        <>
        <div style={{width:"50%",margin:"10px"}}>
            <div className="headerWrapper">
              <button className="exec-btn" onClick={runCode}>Run Code</button>
            </div>
            <div className="output">
               {output ? output.map((line, i) => <span key={i}>{line}</span>): 'Click "Run Code" to see the output here'}
            </div>
        </div>
        </>
    );
}

export default Output;