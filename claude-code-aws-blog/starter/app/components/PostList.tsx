import Link from 'next/link';
import { Post } from '../lib/simplePosts';
import { withBasePath } from '../lib/basePath';
import ReadingTimeBadge from './ReadingTimeBadge';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-aws-dark">Recent Posts</h2>
      <div className="posts-grid grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-6">
        {posts.map(post => (
          <article key={post.slug} className="post-card bg-white border border-aws-light-gray rounded-lg p-6">
            <div className="mb-3">
              <span className="category-badge bg-aws-orange text-white px-3 py-1 rounded text-xs font-semibold uppercase">
                {post.category}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 text-aws-dark">
              <Link href={withBasePath(`/posts/${post.slug}`)} className="hover-link">
                {post.title}
              </Link>
            </h3>

            <div className="post-meta text-sm text-aws-dark-gray mb-4 flex flex-wrap items-center gap-3">
              <div>
                <span>{post.date}</span>
                <span className="mx-2">by</span>
                <span>{post.author}</span>
              </div>
              <ReadingTimeBadge content={post.content} />
            </div>

            {post.excerpt && (
              <p className="text-aws-dark-gray mb-4 line-clamp-3">
                {post.excerpt}
              </p>
            )}

            <div className="post-tags flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="tag-badge bg-aws-light-gray text-aws-dark-gray px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
