import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../../data/blogIndex';
import './BlogPostPage.css';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="container section text-center">
        <h1>Post not found</h1>
        <Link to="/blog">Back to blog</Link>
      </div>
    );
  }

  const renderContent = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={index} className="post-paragraph">{block.text}</p>;
      case 'heading':
        return <h2 key={index} className="post-heading">{block.text}</h2>;
      case 'image':
        return (
          <figure key={index} className="post-image-wrap">
            <img src={block.src} alt={block.alt} className="post-image" />
            {block.alt && <figcaption className="post-caption">{block.alt}</figcaption>}
          </figure>
        );
      case 'quote':
        return <blockquote key={index} className="post-quote">{block.text}</blockquote>;
      default:
        return null;
    }
  };

  return (
    <article className="blog-post-page fade-in">
      <header className="post-header">
        <div className="post-hero-wrap">
          <img src={post.coverImage} alt={post.title} className="post-hero-img" />
        </div>
        <div className="container narrow">
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="meta-sep">&bull;</span>
            <span className="post-tags">{post.tags.join(', ')}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </div>
      </header>

      <div className="container narrow">
        <div className="post-content">
          {post.content.map((block, index) => renderContent(block, index))}
        </div>
        
        <footer className="post-footer">
          <Link to="/blog" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Stories
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default BlogPostPage;
