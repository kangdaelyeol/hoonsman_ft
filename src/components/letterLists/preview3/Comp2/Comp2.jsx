import React, { useState, useEffect } from 'react'
import Style from './Comp2.module.css'

const Comp2 = ({ active, showMessage1, showMessage2, sceneData, fontSize }) => {
    const [Img3Url, setImg3Url] = useState('')
    const [message1, setMessage1] = useState('')
    const [message1Style, setMessage1Style] = useState({})
    const [message2, setMessage2] = useState('')
    const [message2Style, setMessage2Style] = useState({})

    useEffect(() => {
        if (sceneData && sceneData.s2) {
            setImg3Url(sceneData.s2.imgs.img3)
            sceneData.s2.messages.forEach((message, index) => {
                const { context, size, color } = message
                if (index === 0) {
                    setMessage1(context)
                    setMessage1Style({
                        fontSize:
                            size === 'small'
                                ? fontSize.small
                                : size === 'medium'
                                ? fontSize.medium
                                : fontSize.large,
                        color,
                    })
                } else {
                    setMessage2(context)
                    setMessage2Style({
                        fontSize:
                            size === 'small'
                                ? fontSize.small
                                : size === 'medium'
                                ? fontSize.medium
                                : fontSize.large,
                        color,
                    })
                }
            })
        }
    }, [sceneData, fontSize])

    return (
        <div
            className={`${Style.container} ${
                active ? Style.active : Style.inactive
            }`}
        >
            <div
                className={`${Style.message1} ${
                    showMessage1 ? Style.fadeIn : ''
                }`}
                style={message1Style}
            >
                {message1}
            </div>
            <div
                className={`${Style.message2} ${
                    showMessage2 ? Style.fadeIn : ''
                }`}
                style={message2Style}
            >
                {message2}
            </div>
            <div className={Style.imageContainer}>
                <img src={Img3Url} alt="Image" />
            </div>
        </div>
    )
}

export default Comp2
