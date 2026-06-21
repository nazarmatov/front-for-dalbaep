import { useState, useRef } from 'react';
import '../styles/HomePage.css';

function HomePage() {
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);

    const handleVideoEnded = () => {
        setVideoEnded(true);
    };

    return (
        <div className="hero">
            <video
                ref={videoRef}
                className={`hero_video ${videoEnded ? 'is-hidden' : ''}`}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnded}
            >
                <source src="/videos/Tiny Bunny - Launch Trailer.mp4" type="video/mp4" />
            </video>

            {/* Фоновая картинка, проявляется после окончания видео.
                Положи свой файл в public/images/ и поправь путь */}
            <div
                className={`hero_bg_image ${videoEnded ? 'is-visible' : ''}`}
                style={{ backgroundImage: "url('/images/hero-background.gif')" }}
            ></div>

            <div className="hero_overlay"></div>

            <nav className="top_panel">
                <ul className="top_panel_links">
                    <li><a href="#top">Top</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#trailer">Trailer</a></li>
                    <li><a href="#characters">Characters</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#features">Books</a></li>
                </ul>
                <div className="buy_button"><a href="#buy">Buy</a></div>
            </nav>

            <div className="logo_stage">
                <img
                    src="/images/tiny_bunny_logo.png"
                    className={`tiny_bunny_logo ${videoEnded ? 'is-revealed' : ''}`}
                    alt="Tiny Bunny"
                />
            </div>
            
        </div>
    );
}

export default HomePage;