import BlogCard from '../../components/BlogCard/BlogCard';
import { getAllPosts } from '../../data/blogIndex';
import './BlogPage.css';

const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <div className="blog-page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Stories & Reflections</h1>
          <p className="page-description fade-in">A collection of thoughts on travel, life, and personal growth.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid blog-grid">
            {posts.map(post => (
              <div key={post.slug} className="fade-in">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
