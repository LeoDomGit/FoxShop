import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  return (
    <div>
      <div className='flex flex-col gap-3'>
        <Link to={`/post/${post.slug}`}>
          <img
            src={`https://dashboard.foxshop.one${post.image}`}
            alt={post.title}
            className='w-full h-[260px] object-cover line-clamp-1 '
          />
          <div className='font-semibold line-clamp-2'>{post.title}</div>
          <p className='line-clamp-2 text-sm'>{post.short_description}</p>
        </Link>
      </div>
    </div>
  );
}

export default PostItem;
