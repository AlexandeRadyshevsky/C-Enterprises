import React from "react";
import "./styles.css";

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="logo.png" alt="Логотип" />
      <span>nterprises</span>
    </div>
    <nav className="nav">
      <a href="#">о нас</a>
      <a href="#">для кого</a>
      <a href="#">процесс</a>
      <a href="#">кейсы</a>
      <a href="#" className="contact">связаться</a>
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Запуск мем-коинов <br /> от лучшей команды <br /> в СНГ</h1>
      <p>
        Делаем запуски <span className="highlight">инфлюенсерам и проектам в web-3</span>: <br />
        за плечами C-Enterprises уже <span className="orange">+300 запусков.</span>
      </p>
    </div>
    <div className="hero-waves">
      <svg className="wave wave1" id="wave1" viewBox="100 0 920 454">
        <path stroke="url(#paint0_linear)" strokeOpacity="0.5" strokeWidth="30" />
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="227" x2="1920" y2="227" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFA100" />
            <stop offset="1" stopColor="#AF64FF" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="wave wave2" id="wave2" viewBox="450 0 920 854">
        <path stroke="url(#paint1_linear)" strokeOpacity="0.5" strokeWidth="30" />
        <defs>
          <linearGradient id="paint1_linear" x1="0" y1="227" x2="1920" y2="227" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFA100" />
            <stop offset="1" stopColor="#AF64FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
);

const ContentBlock = ({ title, text, images }) => (
  <div className="container">
    <div className="text">
      <p>{title}</p>
      <p>{text}</p>
    </div>
    <div className="image-wrapper">
      {images.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} className={`image ${img.className}`} />
      ))}
    </div>
  </div>
);

const App = () => (
  <>
    <Header />
    <Hero />
    <ContentBlock
      title="Создаем будущее"
      text="Дональд Трамп. Центральная Африканская Республика. Vine. Что их объединяет? У всех них есть свои мем-токены, которые принесли им сотни тысяч, а то и миллионы долларов."
      images={[{ src: "africa_coin.png", alt: "Africa", className: "africa" }]}
    />
  </>
);

export default App;
