import React, { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import axios from '../api/axios';

function Post() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    document.title = 'Bài viết';

    // Fetch posts whenever the page changes
    const fetchPosts = async () => {
      try {
        // Sử dụng axios để gọi API
        const response = await axios.get(`/post?page=${currentPage}`);

        setPosts(response.data.data);
        setTotalPages(response.data.last_page);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <div className='container mx-auto lg:px-5 xl:px-24 md:px-4 px-5 mb-2 mt-[100px] xl:mt-[140px] lg:mt-[140px] sm:mt-[140px] md:mt-[140px] xl:mb-5 lg:mb-5 md:mb-5 flex flex-col gap-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Post;
