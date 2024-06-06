import React from 'react'
import starImage from '../img/star.svg'
import {data} from '../data'
import Question from './Question'

export default function Card() {

const [questionsData, setQuestionsData] = React.useState(data)

function toggle(id){
    setQuestionsData(prev => {
        return prev.map(question =>{
            return question.id === id? {...question, isToggled:!question.isToggled} : question
        })
    })
}

const questionElements = questionsData.map(question => {
    return <Question
            key={question.id}
            id={question.id}
            question={question.question}
            answer={question.answer}
            toggled={question.isToggled}
            handleClick={toggle}
    />
})

    return (
        <>
            <div className='card'>
                <div className='card-title-container'>
                <img src={`${starImage}`} alt="a star logo" className='star-logo'/>
                <h2 className='title'>FAQs</h2>
                </div>
                <div className='question'>
                    {questionElements}
                </div>
            </div>
        </>
    )
}
