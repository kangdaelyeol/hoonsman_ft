import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/headerSection/Header'
import Main from './components/mainSection/Main'
import Create from './components/createSection/Create'
import Letter from './components/Letter'
import { Helmet } from 'react-helmet'
import logo from './imgs/imgIntro.png'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Hoons Letter</title>
                    <meta property="og:title" content="hoons letter" />
                    <meta property="og:image" content={logo} />
                    <meta property="og:description" content="hoons letter kakao" />
                </Helmet>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/letter/:letterid" element={<Letter />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
