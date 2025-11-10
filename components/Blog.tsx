import React from 'react';
import { BlogPost } from '../types';
import { View } from '../App';
import { blogPostsData } from '../data/blogPosts';

interface BlogProps {
  setView: (view: View) => void;
}

const BlogPostCard: React.FC<{ post: BlogPost; onViewPost: (id: string) => void }> = ({ post, onViewPost }) => (
  <div className="group relative bg-gray-900/50 rounded-xl border border-gray-800/50 overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2">
    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
      <p className="text-gray-400 mb-4">{post.excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>
       <a href="#" onClick={(e) => { e.preventDefault(); onViewPost(post.id); }} className="inline-block mt-4 text-cyan-400 font-semibold hover:text-cyan-300">Read More &rarr;</a>
    </div>
  </div>
);

const Blog: React.FC<BlogProps> = ({ setView }) => {
  const handleViewPost = (id: string) => {
    setView({ page: 'blogPost', id });
  };

  return (
    <div className="animate-fadeIn">
      <div className="text-center py-16 md:py-24 bg-black">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            From The Blog
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
          Insights, trends, and thoughts from the TWFIK team.
        </p>
      </div>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <BlogPostCard key={post.id} post={post} onViewPost={handleViewPost} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
