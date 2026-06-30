import { useEffect, useState, useRef } from 'react';
import steamLogo from '../assets/steam.svg';
import '../styles/HomePage.css';

let trailerIndex = 0;

function slideTrailer(dir) {
    const track = document.getElementById('trailerTrack');
    const bar = document.getElementById('trailerProgressBar');
    const currentEl = document.getElementById('trailerCurrent');

    if (!track) return;

    const cards = track.querySelectorAll('.trailer_card');
    const total = cards.length;

    if (!total) return;

    const next = trailerIndex + dir;

    // Стоп на первом и последнем — не перематываем
    if (next < 0 || next > total - 1) return;

    trailerIndex = next;

    const gap = 20;
    const cardW = cards[0].offsetWidth + gap;
    track.style.transform = `translateX(-${trailerIndex * cardW}px)`;

    if (bar) {
        bar.style.width = `${((trailerIndex + 1) / total) * 100}%`;
    }

    if (currentEl) {
        currentEl.textContent = String(trailerIndex + 1).padStart(2, '0');
    }

    // Показываем disabled-состояние кнопок
    const btnPrev = document.querySelector('.trailer_btn[aria-label="Previous"]');
    const btnNext = document.querySelector('.trailer_btn[aria-label="Next"]');
    if (btnPrev) btnPrev.dataset.disabled = trailerIndex === 0 ? 'true' : 'false';
    if (btnNext) btnNext.dataset.disabled = trailerIndex === total - 1 ? 'true' : 'false';
}

function HomePage() {
    const [videoEnded, setVideoEnded] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [trailerVisible, setTrailerVisible] = useState(false);
    const videoRef = useRef(null);
    const aboutRef = useRef(null);
    const trailerRef = useRef(null);

    const handleVideoEnded = () => {
        setVideoEnded(true);
    };

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

        const aboutNode = aboutRef.current;
        const trailerNode = trailerRef.current;

        const observers = [];

        if (aboutNode) {
            const aboutObserver = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setAboutVisible(true);
                        aboutObserver.disconnect();
                    }
                },
                { threshold: 0.28, rootMargin: '0px 0px -12% 0px' },
            );
            aboutObserver.observe(aboutNode);
            observers.push(aboutObserver);
        }

        if (trailerNode) {
            const trailerObserver = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTrailerVisible(true);
                        trailerObserver.disconnect();
                    }
                },
                { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
            );
            trailerObserver.observe(trailerNode);
            observers.push(trailerObserver);
        }

        return () => {
            observers.forEach(o => o.disconnect());
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, []);

    const trailers = [
        { id: 'jmbUPGgxltc', title: 'Tiny Bunny — Launch Trailer' },
        { id: '5y80wZBH4UY', title: 'Tiny Bunny — Episode 5 Trailer' },
        { id: 'PZ8-YsVJquE', title: 'Tiny Bunny: Other story — Trailer' },
        { id: 'iGWYB8wd7L4', title: 'Tiny Bunny: shackles of darkness — Trailer' },
    ];

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
                        <li><a href="#features">Books</a></li>
                    </ul>
                    <div className="buy_button">
                        <a href="https://store.steampowered.com/app/1421250/Tiny_Bunny/?l=english" target="_blank" rel="noopener noreferrer">Buy</a>
                    </div>
                </nav>

                <div className="logo_stage">
                    <img
                        src="/images/tiny_bunny_logo.png"
                        className={`tiny_bunny_logo ${videoEnded ? 'is-revealed' : ''}`}
                        alt="Tiny Bunny"
                    />
                    <div className={`steam_badge ${videoEnded ? 'is-revealed' : ''}`}>
                        <span className="steam_badge_text">Available on Steam</span>
                        <img src={steamLogo} className="steam_badge_icon" alt="" aria-hidden="true" />
                    </div>
                </div>
            </div>

            {/* =============================================
                ABOUT
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

            {/* =============================================
                TRAILER — хоррор-стиль, компактные карточки,
                частичный третий слайд виден справа
                ============================================= */}
            <section
                ref={trailerRef}
                className={`trailer ${trailerVisible ? 'is-revealed' : ''}`}
                id="trailer"
            >
                {/* Декоративная линия сверху */}
                <div className="trailer_top_line"></div>

                <div className="trailer_inner">
                    <div className="trailer_header">
                        <div className="trailer_heading_block">
                            <span className="trailer_eyebrow">Watch</span>
                            <h2 className="trailer_title">Trailers </h2>
                        </div>

                        <div className="trailer_controls">
                            <div className="trailer_progress_wrap">
                                <div className="trailer_progress">
                                    <div className="trailer_progress_bar" id="trailerProgressBar"></div>
                                </div>
                                <span className="trailer_counter">
                                    <span id="trailerCurrent">01</span>
                                    <span className="trailer_counter_sep"> / </span>
                                    <span>{String(trailers.length).padStart(2, '0')}</span>
                                </span>
                            </div>
                            <div className="trailer_arrows">
                                <button
                                    className="trailer_btn"
                                    aria-label="Previous"
                                    onClick={() => slideTrailer(-1)}
                                >
                                    <span className="trailer_btn_inner">&#8249;</span>
                                </button>
                                <button
                                    className="trailer_btn"
                                    aria-label="Next"
                                    onClick={() => slideTrailer(1)}
                                >
                                    <span className="trailer_btn_inner">&#8250;</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="trailer_track_wrapper">
                        <div className="trailer_track" id="trailerTrack">
                            {trailers.map((v, i) => (
                                <div className="trailer_card" key={v.id} data-index={i}>
                                    <a
                                        className="trailer_card_thumb"
                                        href={`https://www.youtube.com/watch?v=${v.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ backgroundImage: `url('https://img.youtube.com/vi/${v.id}/maxresdefault.jpg')` }}
                                    >
                                        {/* Угловые декоративные рамки в хоррор-стиле */}
                                        <span className="trailer_card_corner tl"></span>
                                        <span className="trailer_card_corner tr"></span>
                                        <span className="trailer_card_corner bl"></span>
                                        <span className="trailer_card_corner br"></span>

                                        <div className="trailer_card_overlay"></div>

                                        <div className="trailer_play_btn">
                                            <span className="trailer_play_icon">&#9654;</span>
                                        </div>

                                        {/* Номер эпизода */}
                                        <span className="trailer_card_num">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </a>
                                    <div className="trailer_card_footer">
                                        <div className="trailer_card_dash"></div>
                                        <p className="trailer_card_title">{v.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Декоративная линия снизу */}
                <div className="trailer_bottom_line"></div>
            </section>
        </>
    );
}

export default HomePage;