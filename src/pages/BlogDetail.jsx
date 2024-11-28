/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from '../api/axios'; // Giả sử bạn dùng axios để gọi API

function BlogDetail() {
  const { slug } = useParams(); // Lấy slug từ URL
  const [post, setPost] = useState(null); // State lưu bài viết
  const [loading, setLoading] = useState(true); // State theo dõi trạng thái tải

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/post/${slug}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    document.title = post ? post.title : 'Tên sản phẩm';
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Bài viết không tồn tại!</div>;
  }

  return (
    <div>
      <Header />

      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mb-5 lg:mb-5 md:mb-5'>
        {/* Title */}
        <h1 className='text-3xl font-semibold text-center mb-4'>
          {post.title}
        </h1>
        <p className='text-center text-gray-500 text-sm mb-6'>
          Ngày đăng: {new Date(post.start_date).toLocaleDateString()}
        </p>

        {/* Image */}
        <div className='mb-6'>
          <img
            className='w-full h-[350px] sm:h-[400px] lg:h-[450px] object-cover'
            src={`https://dashboard.foxshop.one${post.image}`}
            alt={post.title}
          />
        </div>

        <div className='px-4 sm:px-8 lg:px-[50px]'>
          <div
            className='text-gray-700 leading-relaxed mb-4'
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <ul className='list-disc pl-5 text-gray-700 mb-4'></ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BlogDetail;
