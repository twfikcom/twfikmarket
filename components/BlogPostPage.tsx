import React from 'react';
import { BlogPost } from '../types';
import { View } from '../App';

interface BlogPostPageProps {
  post: BlogPost;
  setView: (view: View) => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, setView }) => {
  return (
    <div className="animate-fadeIn">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        <a href="#" onClick={(e) => { e.preventDefault(); setView({ page: 'blog' }); }} className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">&larr; Back to Blog</a>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-400 mb-8">
          <span>By {post.author}</span>
          <span className="mx-2">&bull;</span>
          <span>{post.date}</span>
        </div>
        <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-8" />
        <div 
          className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogPostPage;
