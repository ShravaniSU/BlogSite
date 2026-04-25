import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div className="card-image-wrap">
        <img src={post.coverImage} alt={post.title} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span>{post.date}</span>
          <span>{post.tags[0]}</span>
        </div>
        <h3 className="card-title">{post.title}</h3>
        <p className="card-excerpt">{post.excerpt}</p>
        <div className="card-footer">
          Read Story
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
