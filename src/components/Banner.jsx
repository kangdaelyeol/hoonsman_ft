import React from 'react'
import Styles from './banner.module.css'
import logoimg from '../imgs/logo2.png'
import { useNavigate } from 'react-router-dom'

export default function Banner({ viewWidth, isFinish }) {
    const navigate = useNavigate()
    const onBannerClick = () => {
        navigate('/')
    }

    const bannerStyle = {
        transform: isFinish ? 'translateY(0)' : 'translateY(400px)',
    }

    return (
        <div
            className={Styles.container}
            style={{
                width: `${viewWidth}px`,
                ...bannerStyle,
            }}
            onClick={onBannerClick}
        >
            <div className={Styles.wrapper}>
                <img src={logoimg} alt="banner_logo" />
                <div className={Styles.logodes}>
                    Create invitations through AI
                </div>
            </div>
        </div>
    )
}
