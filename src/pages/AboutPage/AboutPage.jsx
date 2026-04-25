import { useEffect } from 'react';
import './AboutPage.css';
import shravaniImg from '../../data/Shravani.jpg';

const AboutPage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page fade-in">
      {/* Hero Section */}
      <section className="section about-header">
        <div className="container narrow text-center">
          <h1 className="about-hero-title reveal">My Journey</h1>
          <p className="about-hero-subtitle reveal">A life filled with change, learning, and quiet happiness.</p>
          <div className="hero-portrait-wrap reveal">
            <img
              src={shravaniImg}
              alt="Shravani Urankar"
              className="hero-portrait"
            />
          </div>
        </div>
      </section>

      {/* Story Section 1: Origins */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image-wrap reveal">
              <img
                src="https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&q=80&w=800"
                alt="Mumbai and Davanagere"
                className="story-image"
              />
            </div>
            <div className="story-text reveal">
              <h2 className="story-heading">Where It All Began</h2>
              <p>
                I didn't grow up in just one place—I grew up across many. My early years began in Mumbai, where I studied until the 3rd standard. After that, life shifted me to Davanagere, where I spent my school years from 4th to 12th.
              </p>
              <p>
                Each move brought a new rhythm, a new way of living, and new people to understand. Somewhere along the way, adapting stopped feeling like a challenge and started becoming a quiet strength. I learned to find comfort in change, and even more, to enjoy it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2: Bangalore */}
      <section className="section story-section alternate">
        <div className="container">
          <div className="story-grid">
            <div className="story-text reveal">
              <h2 className="story-heading">Finding My Path</h2>
              <p>
                Later, I moved to Bangalore to study Information Science and Engineering. That phase of life shaped me in ways I didn’t fully realize at the time—it introduced me to independence, ambition, and the idea of building something for myself.
              </p>
              <p>
                Bangalore also became the place where I stepped into my professional life, working as a developer and learning what it means to grow, both personally and professionally.
              </p>
            </div>
            <div className="story-image-wrap reveal">
              <img
                src="https://dsca.edu.in/wp-content/uploads/2024/01/ARU_2324-2-1920x780.jpg"
                alt="Bangalore Engineering Life"
                className="story-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 3: Gurugram */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image-wrap reveal">
              <img
                src="https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&q=80&w=800"
                alt="Gurugram Skyline"
                className="story-image"
              />
            </div>
            <div className="story-text reveal">
              <h2 className="story-heading">Standing On My Own</h2>
              <p>
                Now, life has brought me to Gurugram—a place that, in many ways, changed me. Being here pushed me to take ownership of my decisions and responsibilities, not just for myself but for my family as well.
              </p>
              <p>
                It hasn’t always been easy, but it has been meaningful. This phase taught me resilience, balance, and the importance of standing on my own feet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shiro Highlight */}
      <section className="section shiro-section">
        <div className="container narrow reveal">
          <div className="shiro-card">
            <div className="shiro-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800"
                alt="Shiro the Golden Retriever"
                className="shiro-image"
              />
            </div>
            <div className="shiro-text">
              <h2 className="shiro-heading">A Source of Pure Joy</h2>
              <p>
                Through all of this, one constant source of joy in my life has been my golden retriever, <strong>Shiro</strong>. He isn’t just a pet—he’s comfort, happiness, and a reminder of the simple, unconditional love that makes everything feel lighter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 4: Spiritual Travels */}
      <section className="section story-section alternate">
        <div className="container">
          <div className="story-grid">
            <div className="story-text reveal">
              <h2 className="story-heading">Journeys of the Spirit</h2>
              <p>
                Gurugram also opened up a new side of life for me—traveling and exploring, often through spiritual journeys with my mother, whose deep faith has shaped many of these experiences.
              </p>
              <p>
                While our perspectives may differ at times, these travels have brought their own kind of peace and connection. I've learned that exploration is as much about the destination as it is about the internal journey.
              </p>
            </div>
            <div className="story-image-wrap reveal">
              <img
                src="https://www.shivkhori.in/wp-content/uploads/2025/09/Kedarnath-Temple.webp"
                alt="Spiritual Journeys"
                className="story-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="section pull-quote-section">
        <div className="container narrow text-center reveal">
          <blockquote className="about-pull-quote">
            "My journey hasn't been about staying in one place—it's been about growing through many."
          </blockquote>
        </div>
      </section>

      {/* Closing */}
      <section className="section closing-section">
        <div className="container narrow reveal">
          <div className="closing-content text-center">
            <p>
              As I move forward, I carry that same hope—to continue building a life that feels meaningful, balanced, and truly my own.
            </p>
            <p>
              "Wandering Thoughts" is my personal corner of the internet where I bridge the gap between my professional life in cloud infrastructure and my personal passion for travel and reflection.
            </p>

            <div className="about-social-final">
              <h3 className="social-title">Let's Connect</h3>
              <div className="social-links-row justify-center">
                <a href="https://github.com/ShravaniSU" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span className="sep">/</span>
                <a href="https://www.linkedin.com/in/shravaniurankar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className="sep">/</span>
                <a href="https://www.instagram.com/shravani_s_urankar" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Grid */}
      <section className="section experiences">
        <div className="container narrow">
          <h2 className="section-title text-center reveal">What I Do</h2>
          <div className="exp-grid">
            <div className="exp-item reveal">
              <h3>Cloud Architecture</h3>
              <p>Building scalable, resilient infrastructure using AWS, Docker, and Kubernetes.</p>
            </div>
            <div className="exp-item reveal">
              <h3>Automation</h3>
              <p>Creating seamless workflows that allow teams to focus on what matters most.</p>
            </div>
            <div className="exp-item reveal">
              <h3>Travel Writing</h3>
              <p>Documenting the quiet moments and grand adventures that shape my perspective.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
