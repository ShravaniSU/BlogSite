import post1 from './posts/finding-peace-in-mountains.json';
import post2 from './posts/lessons-from-solo-travel.json';
import post3 from './posts/art-of-slow-living.json';
import post4 from './posts/rainy-day-reflections.json';

const posts = [post4, post3, post1, post2]; // Sorted by date (simplified)

export const getAllPosts = () => posts;

export const getPostBySlug = (slug) => posts.find(post => post.slug === slug);

export const getLatestPosts = (limit = 3) => posts.slice(0, limit);
