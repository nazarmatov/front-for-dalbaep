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

            {/* =============================================
                FOOTER — соцсети, лого, копирайт
                ============================================= */}
            <footer className="site_footer">
                <div className="footer_socials">
                    <a
                        href="https://vk.com/bunnyhorror"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer_social_link"
                        aria-label="VK"
                    >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.117-1.546 1.539 1.538 1.864 2.461 3.5 2.461h3.476c.792 0 1.198-.396 1.198-.985 0-.642-.913-1.768-3.291-4.21-1.05-1.073-.97-1.069.282-2.701 1.554-2.027 3.659-4.776 1.85-4.776h-3.93c-.402 0-.483.241-.633.608-1.011 2.479-2.91 5.526-3.654 5.034-.781-.516-.434-2.404-.378-5.232.018-.882.115-1.41-.4-1.41h-4.07c-.404 0-.652.299-.65.6.008 1.085-.027 2.067.5 2.78.736.999 1.39 4.27.1 4.726-.91.32-1.95-1.057-3.293-3.4-.18-.318-.27-.563-.616-.564-.378-.001-.616.397-.756.737-.396.967-.668 1.99-.86 3.027-.05.275-.07.526.057.738.144.24.448.323.62.349 1.196.182 2.255.075 2.255 2.7 0 .582-.13.882.42.882h1.305z"/>
                        </svg>
                    </a>

                    <a
                        href="https://www.youtube.com/@Saikono_Joker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer_social_link"
                        aria-label="YouTube"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.376.55A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.376-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/>
                        </svg>
                    </a>

                    <a
                        href="https://t.me/TinyBunny_official"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer_social_link"
                        aria-label="Telegram"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M22.046 3.222c-.288-.236-.738-.27-1.297-.097-.595.184-15.683 6.215-16.503 6.543-.762.305-1.473.638-1.473 1.165 0 .375.225.589.847.812.643.232 1.999.659 2.788.876.762.21 1.628.026 2.137-.288l9.07-5.876c.27-.176.516-.07.31.123-.487.452-6.336 5.851-6.99 6.486-.477.462-.39 1.012.013 1.366.452.396 4.027 2.74 4.494 3.073.726.518 1.49.236 1.728-.591.262-.913 2.547-12.236 2.797-13.626.205-1.14-.119-1.717-.921-1.966z"/>
                        </svg>
                    </a>

                    <a
                        href="https://x.com/TinyBunnyVN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer_social_link"
                        aria-label="X (Twitter)"
                    >
                        <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>

                <img
                    src="/images/tiny_bunny_logo.png"
                    alt="Tiny Bunny"
                    className="footer_logo_img"
                />

                <div className="footer_bottom">
                    <p className="footer_copyright">
                        © 2026 Tiny Bunny | Зайчик
                    </p>
                    <a href="/privacy-policy" className="footer_privacy_link">Privacy Policy</a>
                </div>

                <button
                    className="footer_to_top"
                    aria-label="Scroll to top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span className="footer_to_top_arrow">&#8593;</span>
                </button>
            </footer>
        </>
    );
}

export default HomePage;