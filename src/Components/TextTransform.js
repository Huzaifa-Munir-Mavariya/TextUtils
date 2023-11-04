import React,{useState} from 'react'


export default function TextTranform(props) {

    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    

    const [height,setheight] = useState({
        height:"250px",
        fontSize:"17px"
    })

    const handleUpperCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.Alert("Converted to Uppercase","Success")
    }

    const handleLowerCase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.Alert("Converted to Lowercase","Success")
    }
    const clearText = () => {
        setText("");
        props.Alert("Text Cleared","Success")
    }

    const [text,setText] = useState("")
     
    

    return (
        <div className="container">
            <div className="form-floating container col-md-8 my-5">
                <h3 className={`text-${props.mode === 'dark' ? "light" : "dark"}`}>{props.title}</h3>

            <textarea className={`form-control bg-${props.mode === 'dark' ? "dark":"light"} text-${props.mode === "dark" ? "light":"dark"}`} onChange={handleOnChange} value={text} placeholder="Leave a comment here" id="textArea" style={height}></textarea>
            

            <div className="button my-1 col-md-8">
                <button onClick={handleUpperCase} className="btn btn-dark my-1 mx-1 col-md-3">Uppercase</button>
                <button onClick={handleLowerCase} className="btn btn-dark my-1 mx-1 col-md-3">Lowercase</button>
                <button onClick={clearText} className="btn btn-dark my-1 mx-1 col-md-3">Clear</button>
            </div>


            <div className="WordCount my-2">
                <h3 className={`text-${props.mode === 'dark' ? "light" : "dark"}`}>Your Text Summary</h3>
                <p className={`mx-2 text-${props.mode === 'dark' ? "light" : "dark"}`}><b>{text.split(" ").length}</b> words and <b>{text.length}</b> Characters</p>
                <h3 className={`mx-2 text-${props.mode === 'dark' ? "light" : "dark"}`}>Preview your text</h3>
                <p className={`mx-2 text-${props.mode === 'dark' ? "light" : "dark"}`}><i>{text}</i></p>
            </div>
        </div>

        </div>
    );
}