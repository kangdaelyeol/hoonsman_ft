import React, { useState, useEffect } from 'react'
import Style from './Comp1.module.css'

const Comp1 = ({
    active,
    showMessage,
    showDetailImage,
    sceneData,
    fontSize,
}) => {
    const [img1Url, setImg1Url] = useState('')
    const [img2Url, setImg2Url] = useState('')
    const [message, setMessage] = useState('')
    const [messageStyle, setMessageStyle] = useState({}) // 메시지 스타일 상태

    useEffect(() => {
        // JSON 파일에서 데이터 로드
        if (sceneData && sceneData.s1) {
            setImg1Url(sceneData.s1.imgs.img1)
            setImg2Url(sceneData.s1.imgs.img2)
            const { context, size, color } = sceneData.s1.messages[0]
            setMessage(context)
            setMessageStyle({
                // 인라인 스타일 객체 생성
                fontSize:
                    size === 'small'
                        ? fontSize.small
                        : size === 'medium'
                        ? fontSize.medium
                        : fontSize.large,
                color,
            })
        }
    }, [sceneData, fontSize])

    const messageClass = showMessage ? Style.fadeIn : ''
    const Image2Class = showDetailImage ? Style.fadeIn : ''
    console.log(fontSize)
    return (
        <div
            className={`${Style.container} ${
                active ? Style.active : Style.inactive
            }`}
        >
            <div
                className={`${Style.message} ${messageClass}`}
                style={messageStyle} // 인라인 스타일 적용
            >
                {message}
            </div>
            <div className={Style.imageContainer}>
                <img src={img1Url} alt="Image1" />
            </div>
            <div className={`${Style.detailImage} ${Image2Class}`}>
                <img src={img2Url} alt="Image2" />
            </div>
        </div>
    )
}

export default Comp1
