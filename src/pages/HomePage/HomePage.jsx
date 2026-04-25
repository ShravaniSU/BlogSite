import Hero from '../../components/Hero/Hero';
import BlogCard from '../../components/BlogCard/BlogCard';
import { getLatestPosts } from '../../data/blogIndex';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const latestPosts = getLatestPosts(3);

  return (
    <div className="home-page">
      <Hero />
      
      <section className="section latest-stories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Stories</h2>
            <Link to="/blog" className="view-all">View all stories &rarr;</Link>
          </div>
          
          <div className="grid blog-grid">
            {latestPosts.map(post => (
              <div key={post.slug} className="fade-in">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section call-to-action">
        <div className="container">
          <div className="cta-content fade-in">
            <h2 className="cta-title">Journey through my thoughts</h2>
            <p className="cta-text">Join me as I navigate the world of tech, travel, and personal growth.</p>
            <Link to="/about" className="cta-button">More About Me</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
