function Banner({ src, text }) {
  return (
    <section className="banner-container">
      <img src={src} alt="banner" />
      <span className="banner-text">{text}</span>
    </section>
  );
}

export default Banner;
