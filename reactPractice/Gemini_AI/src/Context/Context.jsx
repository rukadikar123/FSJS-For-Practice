import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [showResult, setShowResult] = useState(false)
    const [resultData, setResultData] = useState("")
    const [prevPrompt, setPrevPrompt] = useState([])
    const [recentPrompt, setRecentPrompt] = useState("")
    const newChat=()=>{
        setResultData("")
        setShowResult(false)
        setPrevPrompt([])
    }

    const onSent = async (prompt) => {
        setResultData("")
        setShowResult(true)
        let response;
        if(prompt!== undefined){
            response=await run(prompt);
            setRecentPrompt(prompt)
        }else{
            setPrevPrompt(prev => [...prev, input])
            setRecentPrompt(input)
            response =await run(input)
        }
        let responseArray = response.split("**")
        let newResponse;
        for (let i = 0; i < responseArray.length; i++) {
            if (i == 0 || i % 2 !== 1) {
                newResponse += responseArray[i]
            } else {
                newResponse += "<b>" + responseArray[i] + "<b>"
            }
        }
        setResultData(newResponse)
        
        setInput("")
       
    }



    const ContextValue = {
        input,
        setInput,
        onSent,
        showResult,
        setShowResult,
        resultData,
        setResultData,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        newChat,
    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider