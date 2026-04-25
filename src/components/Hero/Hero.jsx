import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img 
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000" 
        alt="Mountain background" 
        className="hero-bg"
      />
      <div className="hero-content fade-in-up">
        <h1 className="hero-title">Wandering Thoughts</h1>
        <p className="hero-tagline">Exploring life, travel, and the stories in between.</p>
      </div>
      <div className="hero-scroll fade-in">
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path></svg>
      </div>
    </section>
  );
};

export default Hero;
