import React from 'react'
import toggledFalse from '../img/toggledFalse.svg'
import toggledTrue from '../img/toggledTrue.svg'

export default function Question({question, handleClick, id, toggled, answer}){

    return (
        <>
        <div className='question-container' onClick={() => handleClick(id)}>
            <p className="question-text">{question}</p>
            <img className='toggle-image' alt="A toggle button" src={toggled ? toggledTrue : toggledFalse } />
        </div>
        <p className={`answer-text ${toggled ? "revealed" : ''}`}>{answer}</p>
        </>
    )
}