import React from 'react';
import shirt from '../assets/image/image.png';

function PostItem() {
  return (
    <div>
      <div className=''>
        <div className='flex flex-col gap-3'>
          <img src={shirt} alt='' className='w-full h-[260px] object-cover' />
          <div className='font-semibold line-clamp-2'>
            Tiêu đề bài viết Tiêu đề bài viết Tiêu đề bài viết Tiêu đề bài viết
            Tiêu đề bài viết Tiêu đề bài viết Tiêu đề bài viết Tiêu đề bài viết
            Tiêu đề bài viết Tiêu đề bài viết Tiêu đề bài viết
          </div>
          <p className='line-clamp-2 text-sm'>Nội dung</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
