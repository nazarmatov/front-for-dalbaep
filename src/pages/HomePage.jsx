import { useEffect, useState, useRef } from 'react';
import '../styles/HomePage.css';

function HomePage() {
    const [videoEnded, setVideoEnded] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const videoRef = useRef(null);
    const aboutRef = useRef(null);

    const handleVideoEnded = () => {
        setVideoEnded(true);
    };

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

        const aboutNode = aboutRef.current;

        if (!aboutNode) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAboutVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.28,
                rootMargin: '0px 0px -12% 0px',
            },
        );

        observer.observe(aboutNode);

        return () => {
            observer.disconnect();

            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, []);

    return (
        <>
            {/* =============================================
                HERO — полноэкранный блок с видео и логотипом
                ============================================= */}
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

                {/* Статичная картинка-фон, проявляется после окончания видео.
                    Положи файл в public/images/hero-background.gif */}
                <div
                    className={`hero_bg_image ${videoEnded ? 'is-visible' : ''}`}
                    style={{ backgroundImage: "url('/images/hero-background.gif')" }}
                ></div>

                {/* Тёмное радиальное затемнение поверх видео/фото,
                    чтобы навигация и логотип читались */}
                <div className="hero_overlay"></div>

                {/* Навигация — поверх всего (z-index: 3) */}
                <nav className="top_panel">
                    <ul className="top_panel_links">
                        <li><a href="#top">Top</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#trailer">Trailer</a></li>
                        <li><a href="#characters">Characters</a></li>
                        <li><a href="#location">Location</a></li>
                        <li><a href="#features">Books</a></li>
                    </ul>
                    <div className="buy_button"><a href="https://store.steampowered.com/app/1421250/Tiny_Bunny/?l=english" target="_blank" rel="noopener noreferrer">Buy</a></div>
                </nav>

                {/* Логотип — появляется из расфокуса по окончании видео */}
                <div className="logo_stage">
                    <img
                        src="/images/tiny_bunny_logo.png"
                        className={`tiny_bunny_logo ${videoEnded ? 'is-revealed' : ''}`}
                        alt="Tiny Bunny"
                    />
                </div>
            </div>

            {/* =============================================
                ABOUT — текст размещён поверх изображения,
                слева от центра, как в референсе.
                ============================================= */}
            <section
                ref={aboutRef}
                className={`about ${aboutVisible ? 'is-revealed' : ''}`}
                id="about"
            >
                <div className="about_visual">
                    <img
                        src="/images/tiny_bunny_about_game.png"
                        alt="Tiny Bunny — scene from the game"
                        className="about_image"
                    />
                    <div className="about_visual_overlay"></div>

                    <div className="about_content">
                        <div className="about_label">About</div>

                        <h2 className="about_title">
                            Something watched<br />from the forest
                        </h2>

                        <div className="about_divider"></div>

                        <div className="about_text">
                            <p>Tiny Bunny is a horror visual novel set in a remote Russian village, where children begin to disappear one by one.</p>
                            <p>You play as Anton — a boy who arrived with his father for the winter break. The village seems quiet, buried under snow. But something ancient lurks at the edge of the tree line, and it has noticed you.</p>
                            <p>Your choices shape the story. Each decision pulls you deeper into a world where folklore and dread are inseparable — and survival depends on understanding what the forest truly wants.</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default HomePage;