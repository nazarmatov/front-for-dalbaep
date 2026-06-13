// src/pages/HomePage/HomePage.jsx
import '../styles/HomePage.css'

function HomePage() {
  return (
    <main className="home">
      <section className="home__hero">
        <h1 className="home__title">Добро пожаловать в dalbaep.online</h1>
        <p className="home__subtitle">
          Здесь будет описание вашего сайта
        </p>
        <button className="home__cta">Начать</button>
      </section>

      <section className="home__features">
        <div className="home__feature-card">
          <h3 className="home__feature-title">Преимущество 1</h3>
          <p className="home__feature-text">Описание первого преимущества</p>
        </div>

        <div className="home__feature-card">
          <h3 className="home__feature-title">Преимущество 2</h3>
          <p className="home__feature-text">Описание второго преимущества</p>
        </div>

        <div className="home__feature-card">
          <h3 className="home__feature-title">Преимущество 3</h3>
          <p className="home__feature-text">Описание третьего преимущества</p>
        </div>
      </section>
    </main>
  )
}

export default HomePage