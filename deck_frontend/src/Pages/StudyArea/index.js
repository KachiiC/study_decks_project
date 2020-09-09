import React, { useState, useEffect } from "react"

function StudyArea () {

    const [isFetching, setIsFetching] = useState(true)
    const [word, setWord] = useState(0)
    const [displayWord, setDisplayWord] = useState([])
    const [isDisplayable, setIsDisplayable] = useState(false)
    const [showResults, setShowResults] = React.useState(false)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/study_deck_list')
        .then((response) => { 
            return response.json() 
        })
        .then((wordData) => { 
            setDisplayWord(wordData)
            setShowResults(false)
            setIsDisplayable(true)
            setIsFetching(false)
        })
        .catch((error) => { 
            setIsFetching(false)
        })
        
    }, [word])

    const showMe = () => setShowResults(true)

    const Results = () => (
        <div>
            <p><b>Definition:</b> {displayWord[word].definition}</p>
            <p><b>Romanization:</b> {displayWord[word].romanization}</p>
            <p><b>Notes:</b> {displayWord[word].notes}</p>
            <p>{displayWord[word].notes}</p>
        </div>
    )

    const renderLogic = (isFetching)?(
        <div>Loading</div>
    ):((isDisplayable)?(
        <div>
            <h1>{displayWord[word].word_phrase}</h1>
            { showResults ? <Results /> : null }
        </div>
        
        ):(<div>Unable to display</div>))

    return (
        <>
        <div className="home-container">
            <h2>Study Area</h2>
            {renderLogic}
            <div>
                <button onClick={() => {setWord(prevWord => prevWord + 1)}}>previous word</button>
                <button onClick={showMe}>Show Answer</button>
                <button onClick={() => {setWord(prevWord => prevWord + 1)}}>next word</button>
            </div>
        </div>
        </>
    )
}

export default StudyArea;