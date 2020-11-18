import React, { useState, useEffect } from "react"

function StudyArea () {

    const [isFetching, setIsFetching] = useState(true)
    const [wordIndex, setWordIndex] = useState(0)
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
        
    }, [wordIndex])

    const nextWord = () => {
        (wordIndex === displayWord.length - 1) ? 
            setWordIndex(0):setWordIndex(prevWord => prevWord + 1);
        setShowResults(false)
    }

    const previousWord = () => {
        (wordIndex === 0) ? 
            setWordIndex(displayWord.length - 1):setWordIndex(prevWord => prevWord - 1);
        setShowResults(false)
    }

    const showMe = () => setShowResults(true)

    const Results = () => (
        <div>
            <p><b>Definition:</b> {displayWord[wordIndex].definition}</p>
            <p><b>Romanization:</b> {displayWord[wordIndex].romanization}</p>
            <p><b>Notes:</b> {displayWord[wordIndex].notes}</p>
            <p>{displayWord[wordIndex].notes}</p>
        </div>
    )

    const renderLogic = (isFetching)?(<div>Loading</div>):
        ((isDisplayable)?(
            <div>
                <h1>{displayWord[wordIndex].word_phrase}</h1>
                    <h6>{wordIndex +1} of {displayWord.length}</h6>
                    <button onClick={nextWord}>previous word</button>
                    <button onClick={showMe}>Show Answer</button>
                    <button onClick={previousWord}>next word</button>
                { showResults ? <Results /> : null }
            </div>
        ):(<div>Unable to display</div>))

    return (
        <>
        <div className="home-container">
            <h2>Study Area</h2>
            {renderLogic}
        </div>
        </>
    )
}

export default StudyArea;