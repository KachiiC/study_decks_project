import React, { useState, useEffect } from "react"

function StudyArea () {

    const [isFetching, setIsFetching] = useState(true)
    const [word, setWord] = useState(1)
    const [displayWord, setDisplayWord] = useState([])
    const [isDisplayable, setIsDisplayable] = useState(false)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/study_deck/${word}`)
        .then((response) => { 
            return response.json() 
        })
        .then((wordData) => { 
            setDisplayWord(wordData)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
        })
        
    }, [word])

    function nextWord() {
        setWord(prevWord => prevWord + 1)
    }

    function lastWord() {
        setWord(prevWord => prevWord - 1)
    }



    const renderLogic = (isFetching)?(
        <div>Loading</div>
    ):((isDisplayable)?(
        <div>
            <p>{displayWord.word_phrase}</p>
            <p>{displayWord.notes}</p>
        </div>
        
        ):(<div>Unable to display</div>))

    

    return (
        <>
            <h2>Study Area</h2>
            {renderLogic}
            <button onClick={lastWord}>previous word</button>
            <button onClick={nextWord}>next word</button>
        </>
    )
}

export default StudyArea;